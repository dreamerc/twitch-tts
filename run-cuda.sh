#!/bin/bash
CUDA_VISIBLE_DEVICES="0" tts-server --model_name "tts_models/en/ljspeech/tacotron2-DDC_ph" --use_cuda True
