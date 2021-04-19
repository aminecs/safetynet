from flask import Flask, jsonify, request
from flask_socketio import SocketIO
from twilio_serv import send_message, generate_message, make_call
from speech import speak_prompt, speech_to_text, convert_to_flac, record_speech, detect_help_intent
from sockets import send_conversation, socketio


grandma = {
    'name': 'Jane Doe',
    'time_since_event': 120,
    'address': 'Westminster, London SW1A 1AA, United Kingdom.',
    'emergency_number': '',
    'other_languages': ['es', 'ar']
}

langToprompt = {
    'en-US': 'Are you Ok?',
    'fr-FR': 'Est ce que tu vas bien ?',
    'ar-XA': 'هل أنت بخير ؟',
    'es-ES': '¿Estás bien?',
}


def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')
    if app.config.get('ENV') != 'development':
        print('In producttion')
        app.config.from_object('config.ProdConfig')

    # Initialise socket
    socketio.init_app(app, cors_allowed_origins="*")

    @socketio.on('conversation')
    def handle_my_custom_event(json):
        print('Custome event')
        print('received json: ' + str(json))

    @app.route('/')
    def index():
        language = 'en-US'
        speak_prompt(langToprompt[language], language)
        record_speech(filename='help.wav')
        convert_to_flac(filename='help.wav')
        texts = speech_to_text('help.flac', lang=language)
        is_emergency = True
        score = None
        if texts:
            is_emergency, score = detect_help_intent(texts[0])
        if is_emergency:
            # print('Emergency text sent')
            msg = generate_message(
                grandma['name'], grandma['time_since_event'], grandma['address'])
            send_message(msg, grandma['emergency_number'])
            make_call(msg, grandma['emergency_number'])

            # TODO: Send Conversation through the socket to front end
            send_conversation('Are you Okay?', texts[0], True)

        return jsonify({'resp': texts, 'is_emergency': is_emergency, 'Sentiment score': score})


    return app


if __name__ == '__main__':
    app = create_app()
    socketio.run(app, port=5001, debug=True)
