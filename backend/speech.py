# Module to handle speech to text
import os
import io
from google.cloud import language_v1
import soundfile as sf
import sounddevice as sd
from google.cloud import speech
from google.cloud import texttospeech


def speak_prompt(prompt='Are you okay?', lang='en-US'):
    """Plays a prompt in the specific language"""

    # Instantiates a client
    client = texttospeech.TextToSpeechClient()
    # Set the text input to be synthesized
    synthesis_input = texttospeech.SynthesisInput(text=prompt)
    # Build voice request
    voice = texttospeech.VoiceSelectionParams(
        language_code=lang, ssml_gender=texttospeech.SsmlVoiceGender.NEUTRAL
    )
    # Select the type of audio file you want returned
    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.LINEAR16
    )

    # Perform the text-to-speech request on the text input with the selected
    # voice parameters and audio file type
    response = client.synthesize_speech(
        input=synthesis_input, voice=voice, audio_config=audio_config
    )

    filename = 'temp.wav'
    # # The response's audio_content is binary.
    with open(filename, 'wb') as out:
        # Write the response to the output file.
        out.write(response.audio_content)
        print(f'Audio content written to file "{filename}"')

    # Play Sound
    data, fs = sf.read(filename, dtype='float32')
    sd.play(data, fs)
    status = sd.wait()
    if status:
        print('Could not play sound. Error: {}'.format(status))


def record_speech(time_s=5, filename='temp.mp3'):
    """Records speech from the mic for time_s seconds """
    fs = 44100  # Sample rate
    print(time_s)

    myrecording = sd.rec(int(time_s * fs), samplerate=fs, channels=2)
    status = sd.wait()  # Wait until recording is finished
    if status:
        print('Error while recording: {}'.format(status))
    sf.write(filename, myrecording, fs)


def convert_to_flac(filename='temp.mp3'):
    """Convert files to flac for ease of use with GCP"""

    # Extract audio data and sampling rate from file
    data, fs = sf.read(filename)
    # Save as FLAC file at correct sampling rate
    flac_filename = filename.split('.')[0] + '.flac'
    print('Flac filename', flac_filename)
    sf.write(flac_filename, data, fs)


def speech_to_text(filename='temp.mp3', lang='en-US'):
    """Converts sound recorded in filename to text"""

    # Instantiates a client
    print('Converting speech to text...')
    client = speech.SpeechClient()

    with io.open(filename, "rb") as audio_file:
        content = audio_file.read()

    audio = speech.RecognitionAudio(content=content)
    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.FLAC,
        sample_rate_hertz=44100,
        language_code=lang,
        audio_channel_count=2,
    )

    # Detects speech in the audio file
    response = client.recognize(config=config, audio=audio)

    # Detect Intent:
    if response is None:
        print("Calling 911")
        return []
    else:
        texts = []
        for result in response.results:
            texts.append(result.alternatives[0].transcript)
            print("Transcript: {}".format(result.alternatives[0].transcript))

        return texts


def detect_help_intent(text, threshold=-0.3):
    """
    Detetcts if the text is requesting for help
    threshold: -0.3 (Anything lower than this threshold signifies something bad has happened)
    """

    client = language_v1.LanguageServiceClient()
    type_ = language_v1.Document.Type.PLAIN_TEXT
    encoding_type = language_v1.EncodingType.UTF8
    document = {"content": text, "type_": type_}

    response = client.analyze_sentiment(
        request={'document': document, 'encoding_type': encoding_type})

    sentiment_score = response.document_sentiment.score

    is_emergency = sentiment_score < threshold

    return is_emergency, sentiment_score
