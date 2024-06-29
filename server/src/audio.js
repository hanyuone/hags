import e from "essentia.js";
import ffmpeg from "fluent-ffmpeg";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";
import fs from "fs";
import wav from "node-wav";

const essentia = new e.Essentia(e.EssentiaWASM);

export function extractAudio(videoPath) {
    ffmpeg.setFfmpegPath(ffmpegInstaller.path);

    return new Promise((resolve, reject) => {
        ffmpeg(videoPath)
            .outputOptions(['-vn'])  // Extract one frame per second
            .output(`${videoPath}-data/audio.wav`)  // Save frames with a numeric index
            .on('end', () => {
                console.log('Audio extracted successfully');
                resolve();
            })
            .on('error', (err) => {
                console.error('Error during frame extraction:', err);
                reject(err);
            })
            .run();
    });
}

export function processAudio(audioPath) {
    const audioFile = fs.readFileSync(audioPath);
    const result = wav.decode(audioFile);

    const audioLeftChannelData = essentia.arrayToVector(result.channelData[0]);
    const audioRightChannelData = essentia.arrayToVector(result.channelData[1]);
    const audioDownMixed = essentia.MonoMixer(audioLeftChannelData, audioRightChannelData).audio;

    return audioDownMixed;
}

export function extractLoudness(audioVec) {
    const rms = essentia.RMS(audioVec).rms;

    // Assuming benchmark is 90dB, we want to reduce our volume by 10dB to reach "safe" levels.
    // Thus, anything below a -0.5 is safe, and anything above that is dangerous.
    const logAverage = Math.log10(rms);

    if (logAverage < -0.5) {
        return 1;
    }

    return 1 + (logAverage * 2);
}

export function extractBpm(audioVec) {
    const beats = essentia.RhythmExtractor(audioVec);
    const over = beats.bpm - 92;

    if (beats.bpm < 92) {
        return 1;
    }

    // Every 10 BPM over the default of 92 halves the final score
    return 1 / (2 ** (over / 10));
}
