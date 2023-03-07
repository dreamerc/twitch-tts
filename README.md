# twitch-tts
Twitch Text-To-Speech Tool

This tool is add __!tts__ command , and play audio from Python TTS.

It's Free (twitch-tts under MIT License).

The Goal :
1. Help that some people don't want to use their real voice.
2. Accessible feature shouldn't charge.
3. Making the datasets/models for public domain.

__Use it carefully , it's an early version.__

Development On Ubuntu Linux.

A. Classical (support CUDA)

```
Twitch.py client - !tts [something] -> Coqui.ai TTS Feature - Curl -> ALSA:aplay
```

B. New (CPU)

```
Browser (twitch-js) <-> Docker with TTS
```

## Quick Start (B)

```sh
docker run -it --rm -p 5003:8000 -p 5002:5002 dreamerwolf/twitch-tts-server:latest /root/twitch-tts/run-cpu.sh
```

## Install Guide (A)
---
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

3. Edit config.txt and Start the twitch chat bot. 
  - Channel & nickname : your twitch account name in URL, but channel name start with # .
  - OAuth : https://twitchapps.com/tmi/
  - client_id & client_secret : https://dev.twitch.tv/console/apps/create

Start :

```bash
python twitch-tts.py
```

Usage : 

use it in chatroom

```
!tts <something> 
```
