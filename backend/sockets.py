from flask import jsonify
from flask_socketio import SocketIO

socketio = SocketIO(cors_allowed_origins="*")


def ack():
    print('Something happened')


def send_conversation(prompt, user_response, is_emergency):
    if is_emergency:
        status = "Emergency services have been called"
    else:
        status = "Emergency contact has been notified"
    socketio.emit('conversation', {"Prompt": prompt, "User response": user_response, "Status": status}, callback=ack)


# send_conversation('Are you okei', 'no', True)
