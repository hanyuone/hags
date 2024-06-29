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
    const rms = essentia.RMS(audioVec).rms;

    // Assuming benchmark is 90dB, we want to reduce our volume by 10dB to reach "safe" levels.
    // Thus, anything below a -0.5 is safe, and anything above that is dangerous.
    const logAverage = Math.log10(rms);

    if (logAverage < -0.5) {
        return 1;
    }

    return 1 + (logAverage * 2);
}

export function extract_bpm(audioVec) {
    const beats = essentia.RhythmExtractor(audioVec);
    const over = beats.bpm - 92;

    // Every 10 BPM over the default of 92 halves the final score
    return 1 / (2 ** (over / 10));
}
