import Microphone from 'node-microphone';
import { GlobalKeyboardListener } from 'node-global-key-listener';
import * as fs from 'fs';

const globalListener = new GlobalKeyboardListener();

globalListener.addListener((e) => {
  if (e.vKey == 64) {
    if (e.state === 'DOWN') prepare();
    if (e.state === 'UP') finish();
  }
});

const mic = new Microphone({
  device: 'default',
  rate: 44100,
});

function prepare() {
  console.log('Recording started');
  const micStream = mic.startRecording();
  const fileStream = fs.createWriteStream('audio/command.wav');
  micStream.pipe(fileStream);
}

function finish() {
  mic.stopRecording();
  console.log('Recording finished!');
}
