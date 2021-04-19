import os
from twilio.rest import Client


def generate_message(name, time_since_event, address):
    return 'Hi, I am Debra, the Automated Assistant.\n'\
        f'{name.capitalize()} just fell down {time_since_event} seconds ago.\n'\
        f'Please come to {address}'


def send_message(message, dest_number=''):
    # Setup for twilio
    account_sid = os.environ['TWILIO_ACCOUNT_SID']
    auth_token = os.environ['TWILIO_AUTH_TOKEN']
    from_number = os.environ['TWILIO_NUMBER']
    client = Client(account_sid, auth_token)

    message = client.messages \
                    .create(
                        body=message,
                        from_='',
                        to=dest_number
                    )

    print(message.sid)


def make_call(message, dest_number):
    # Your Account Sid and Auth Token from twilio.com/console
    # and set the environment variables. See http://twil.io/secure
    account_sid = os.environ['TWILIO_ACCOUNT_SID']
    auth_token = os.environ['TWILIO_AUTH_TOKEN']
    from_number = os.environ['TWILIO_NUMBER']
    client = Client(account_sid, auth_token)

    call = client.calls.create(
        twiml=f'<Response><Say>{message}</Say></Response>',
        to=dest_number,
        from_=from_number
    )

    print(call.sid)


# send_message('Sent from Twilio', '')
# print(generate_message(
#     'tom smith', 10, 'Westminster, London SW1A 1AA, United Kingdom.'))


# grandma = {
#     'name': 'Jane Doe',
#     'time_since_event': 120,
#     'address': 'Westminster, London SW1A 1AA, United Kingdom.',
#     'emergency_number': ''
# }

# msg = generate_message(
#     grandma['name'], grandma['time_since_event'], grandma['address'])
# send_message(msg, grandma['emergency_number'])
# make_call(msg, grandma['emergency_number'])
