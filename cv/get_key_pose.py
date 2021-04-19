import mediapipe as mp
import io
import numpy as np
import PIL
import requests
import cv2

mp_pose = mp.solutions.pose

def get_predictions(image):
    print("Getting key pose")
    with mp_pose.Pose(
        static_image_mode=True, min_detection_confidence=0.8) as pose:
        
        results = pose.process(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
        
    if not results.pose_landmarks:
        return [], []
    else:
        return results.pose_landmarks.ListFields()[0][1], results
