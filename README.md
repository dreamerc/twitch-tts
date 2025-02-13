# twitch-tts
Twitch Text-To-Speech Tool

This tool is added __!tts__ command, and play audio from Python TTS.

It's Free (twitch-tts under MIT License).

The Goal :
1. Help that some people don't want to use their real voice.
2. Accessible feature shouldn't charge.
3. Making the datasets/models for public domain.

__Use it carefully, it's an early version.__
__Upstream, Coqui.ai is under unknown status.__

Development On Ubuntu Linux.

A. Classical (support CUDA)

```
Twitch.py client - !tts [something] -> Coqui.ai TTS Feature - Curl -> ALSA:aplay
```

B. New (CPU only)

```
Browser (twitch-js) <-> Docker with Coqui.ai TTS
```

## Quick Start (B)

```sh
docker run -it --rm -p 5003:8000 -p 5002:5002 -e TWITCHCHANNEL=<ChannelName> dreamerwolf/twitch-tts-server:latest /root/twitch-tts/run-cpu-docker.sh
```

- Open [http://localhost:5003](http://localhost:5003)
  - Allow auto play media
  - Allow JavaScript
- Wait the Model Download

## Install Guide (A)
---
0. Python Venv and Git

```sh
sudo apt install python3-venv git
mkdir -p ~/python3-venv-root/twitch-tts-venv
python3 -m venv ~/python3-venv-root/twitch-tts-venv
cd ~/python3-venv-root/twitch-tts-venv
source ~/python3-venv-root/twitch-tts-venv
git clone https://github.com/dreamerc/twitch-tts
```

1.  Install https://github.com/coqui-ai/TTS and others

```bash
pip install -r requirements.txt
```

2. Start TTS WSGI server , and it will take minutes for the model based on your network.

CPU :

```sh
./run-cpu.sh
```

nVidia CUDA :

```sh
./run-cuda.sh
```

3. Edit config.txt and Start the twitch chatbot. 
  - Channel & nickname : your twitch account name in URL, but channel name start with # 
  - OAuth : https://twitchapps.com/tmi/
  - client_id & client_secret : https://dev.twitch.tv/console/apps/create

Start :

```bash
python twitch-tts.py
```

## How to Use?

Usage : 

use it in chatroom

```
!tts <something> 
```

## FAQ

- Q: If you don't want to use browser as a client, you still can use python client.

  A: Use [Python venv feature](https://docs.python.org/3/library/venv.html) to install.

- Q: Where is autoplay and JavaScript setting?

  A: https://blog.mozilla.org/en/uncategorized/block-autoplay/ (But set allow for Firefox), Chrome is default enabled.
