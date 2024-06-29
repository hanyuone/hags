import e from "essentia.js";
import fs from "fs";
import wav from "node-wav";

const essentia = new e.Essentia(e.EssentiaWASM);

export function processAudio(audioPath) {
    const audioFile = fs.readFileSync(audioPath);
    const result = wav.decode(audioFile);

    const audioLeftChannelData = essentia.arrayToVector(result.channelData[0]);
    const audioRightChannelData = essentia.arrayToVector(result.channelData[1]);
    const audioDownMixed = essentia.MonoMixer(audioLeftChannelData, audioRightChannelData).audio;

    return audioDownMixed;
}

export function extract_loudness(audioVec) {
    const decibels = 20 * Math.log10(1.0 / essentia.RMS(audioVec).rms);
    return decibels;
}

export function extract_bpm(audioVec) {
    const beats = essentia.RhythmExtractor(audioVec);
    const over = beats.bpm - 92;

    return 1 / (2 ** (over / 10));
}
