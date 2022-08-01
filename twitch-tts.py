import twitch
import urllib.parse
import os
import configparser

def handle_message(message: twitch.chat.Message) -> None:
    print(message.channel, message.sender, message.text)
    if message.text.startswith('!tts'):
        try:
            url = "http://localhost:5002/api/tts?text=" + urllib.parse.quote_plus(message.sender + " says " + message.text[4:])
            os.system('curl "' + url + '" --get --output - | aplay')
        except:
            pass
    if message.text.startswith('!views'):
        try:
            message.chat.send(f'@{message.user().display_name}, you have {message.user().view_count} views.')
        except:
            pass

def main():
    config = configparser.ConfigParser()
    config.read('config.txt')
    chat = twitch.Chat(channel=config['twitch']['channel'],
                       nickname=config['twitch']['nickname'],
                       oauth=config['twitch']['oauth'],
                       helix=twitch.Helix(client_id=config['twitch']['client_id'],
                           client_secret=config['twitch']['client_secret'],
                           use_cache=True))
    chat.subscribe(handle_message)
    print('Twitch Chat connected. Ready for the jobs.')


if __name__ == '__main__':
    main()

