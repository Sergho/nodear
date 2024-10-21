import Microphone from 'node-microphone';
import * as fs from 'fs';

const mic = new Microphone({
  device: 'default',
  rate: 44100,
});
const fileStream = fs.createWriteStream('audio/command.wav');
const micStream = mic.startRecording();

micStream.pipe(fileStream);

setTimeout(() => {
  console.log('Recording finished!');
  mic.stopRecording();
}, 3000);
