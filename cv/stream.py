import cv2
from flask import Flask, Response
import get_key_pose
import numpy as np
import mediapipe as mp
import get_key_pose
import threading, queue
from joblib import load
import time
from flask_socketio import SocketIO, emit
import collections
import requests

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

class Worker(threading.Thread):
    def __init__(self, q, output_q):
        self.q = q
        self.output_q = output_q
        super().__init__()
    def run(self):
        while True:
            self.get_prediction(self.q.get())
            self.q.task_done()
            
    def get_prediction(self, frame):
        pred, res = get_key_pose.get_predictions(frame)
        if len(pred) == 0:
            self.output_q.put_nowait(([], []))
            return False
        else:
            self.output_q.put_nowait((pred, res))
            return True
            
def mse(prev_frame, curr_frame):
    # the 'Mean Squared Error' between the two images is the
    # sum of the squared difference between the two images;
    # NOTE: the two images must have the same dimension
    err = np.sum((prev_frame.astype("float") - curr_frame.astype("float")) ** 2)
    err /= float(prev_frame.shape[0] * prev_frame.shape[1])
    
    # return the MSE, the lower the error, the more "similar"
    # the two images are
    return err

def get_feed():
    cap = cv2.VideoCapture(0)
    dim = (320, 240)
    
    org = (50, 50)
    fontScale = 1
    color = (255, 255, 255)
    thickness = 2
    font = cv2.FONT_HERSHEY_DUPLEX
    
    threaded = 0
    clf = load('clf_mlp_mp.joblib')
    q = queue.Queue()
    output_q = queue.Queue()
    motion_q = queue.Queue()
    t = Worker(q, output_q)
    t.start()
    
#    mp_drawing = mp.solutions.drawing_utils
#    drawing_spec = mp_drawing.DrawingSpec(thickness=1, circle_radius=1)
    
    mp_pose = mp.solutions.pose
    
    last_motion = 0
    pred_label = 0

    rec_buffer = collections.deque(maxlen=300)
    frames_nbr_fall = 0
    
    while(True):
        ret, og_frame = cap.read()
        frame = cv2.resize(og_frame, dim, interpolation = cv2.INTER_LINEAR)
        rec_buffer.append(og_frame)
        if not output_q.empty():
            output, res = output_q.get()
            if len(output) > 0:
                landmarks_export = []
                for landmark in output:
                    landmarks_export.append(landmark.x)
                    landmarks_export.append(landmark.y)
                    landmarks_export.append(landmark.z)
                pred_label = clf.predict([landmarks_export])
                
#                mp_drawing.draw_landmarks(
#                image=og_frame,
#                landmark_list=res.pose_landmarks,
#                connections=mp_pose.POSE_CONNECTIONS,
#                landmark_drawing_spec=drawing_spec,
#                connection_drawing_spec=drawing_spec)
                
                if not motion_q.empty():
                    prev_frame = motion_q.get()
                    mse_res = mse(prev_frame, frame)
                    if mse_res > 100:
                        if last_motion > 0:
                            curr_motion = time.time()
                            elapsed_time = curr_motion-last_motion
                            send_elapsed_time(time.strftime("%H:%M:%S", time.gmtime(elapsed_time)))
                            print("Time elapsed since last motion: ", time.strftime("%H:%M:%S", time.gmtime(elapsed_time)))
                        last_motion = time.time()
                motion_q.put(frame)
            else:
                pred_label = 3
            q.put_nowait(frame)
        elif not threaded:
            threaded = 1
            q.put_nowait(frame)
            
        if pred_label == 0:
            send_state(0)
            frames_nbr_fall = 0
            frame = cv2.putText(og_frame, 'Standing', org, font, fontScale, color, thickness, cv2.LINE_AA)
        elif pred_label == 1:
            send_state(1)
            frames_nbr_fall += 1
            frame = cv2.putText(og_frame, 'Lying', org, font, fontScale, color, thickness, cv2.LINE_AA)
        elif pred_label == 3:
            send_state(3)
            frame = cv2.putText(og_frame, 'Absent', org, font, fontScale, color, thickness, cv2.LINE_AA)
        
        if frames_nbr_fall == 20:
            fourcc = cv2.VideoWriter_fourcc('a','v','c','1')
            # fourcc = cv2.VideoWriter_fourcc(*'MP4V')
            writer = cv2.VideoWriter('../web/src/fall.mp4',fourcc, 25.0, (frame.shape[1], frame.shape[0]))
            
            for i in range(0, len(rec_buffer)):
                writer.write(rec_buffer[i])
            writer.release()
            requests.get("http://127.0.0.1:5001/")
        
        #cv2.imshow("frame", og_frame)
        ret, buffer = cv2.imencode('.jpg', og_frame)
        og_frame = buffer.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + og_frame + b'\r\n')

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()
    
@app.route('/video_feed')
def video_feed():
    return Response(get_feed(), mimetype='multipart/x-mixed-replace; boundary=frame')

def send_state(label):
    socketio.emit('status', label)

def send_elapsed_time(formated_time):
    socketio.emit('elapsed time', formated_time)
    
def send_fall(video):
    with open("fall.mp4", "rb") as vid:
        fall_vid = vid.read()
    emit('fall_video', {'Fall': fall_vid})
    
if __name__ == "__main__":
    #app.run(debug=True)
    socketio.run(app)
