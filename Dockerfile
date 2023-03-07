FROM python:3.10
WORKDIR /root
RUN cd /root && git clone https://github.com/dreamerc/twitch-tts && cd /root/twitch-tts/ && pip install -r requirements.txt 
EXPOSE 5002/tcp 8000/tcp
ENTRYPOINT ["/bin/bash"]
