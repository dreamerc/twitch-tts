#!/bin/bash
cd /root/twitch-tts/browser_client
sed -i "s/dreamerc/$TWITCHCHANNEL/g" src/index.js
echo "* Starting twitch-tts-server and webclient-server , Open browser with http://localhost:5003/index.html , and wait the model downloading. Ctrl+C to Exit ."
(trap 'kill 0' SIGINT; python -m http.server & tts-server --model_name "tts_models/en/ljspeech/tacotron2-DDC_ph")
