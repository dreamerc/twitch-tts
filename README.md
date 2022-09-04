# twitch-tts
Twitch Text-To-Speech Tool

This tool is add __!tts__ command , and play audio from Python TTS.
__Use it carefully , it's an early version.__

---
1.  Install https://github.com/coqui-ai/TTS and others

```bash
pip install -r requirements.txt
```

2. Start TTS WSGI server  , and it will take minutes for the model based on your network.

CPU :

```bash
run-cpu.sh
```

nVidia CUDA :

```bash
run-cuda.sh
```

3. Edit config.txt and Start the twitch chat bot. 
  - channel & nickname : your twitch account name in URL , but channel name start with # .
  - OAuth : https://twitchapps.com/tmi/
  - client_id & client_secret : https://dev.twitch.tv/console/apps/create

Start :

```bash
python twitch-tts.py
```

Usage :
```
!tts <something> 
```
