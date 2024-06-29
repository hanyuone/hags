import express from "express";
import fs from "fs";
import multer from "multer";
import { extract_brightness, extractFrames, calc_avg, extract_contrast, extract_temperature } from './video.js';
import { extractAudio, extractBpm, extractLoudness, processAudio } from "./audio.js";
import { mean } from "./cli.js";

const CLI_WEIGHTINGS = [0.2, 0.2, 0.2, 0.2, 0.2];

const PORT = 3000;

const upload = multer({ dest: "uploads/" });
const app = express();

app.post(
    "/cli",
    upload.single("video"),
    async (req, res) => {
        const videoPath = req.file.path;
        fs.mkdirSync(`${videoPath}-data`);

        await extractFrames(videoPath);
        const brightness = await calc_avg(`${videoPath}-data`, extract_brightness);
        const contrast = await calc_avg(`${videoPath}-data`, extract_contrast);
        const temperature = await calc_avg(`${videoPath}-data`, extract_temperature);

        await extractAudio(videoPath);
        const audioVec = processAudio(`${videoPath}-data/audio.wav`);
        const loudness = extractLoudness(audioVec);
        const bpm = extractBpm(audioVec);

        const cli = mean([brightness, contrast, temperature, loudness, bpm], CLI_WEIGHTINGS);

        res.send({
            "cli": cli,
        });
    }
);

app.get("/cli_avg", (req, res) => {
    return {
        "cli": 0.5,
    }
});

app.post(
    "/cli/raw",
    upload.single("video"),
    async (req, res) => {
        const videoPath = req.file.path;
        fs.mkdirSync(`${videoPath}-data`);

        await extractFrames(videoPath);
        const brightness = await calc_avg(`${videoPath}-data`, extract_brightness);
        const contrast = await calc_avg(`${videoPath}-data`, extract_contrast);
        const temperature = await calc_avg(`${videoPath}-data`, extract_temperature);

        await extractAudio(videoPath);
        const audioVec = processAudio(`${videoPath}-data/audio.wav`);
        const loudness = extractLoudness(audioVec);
        const bpm = extractBpm(audioVec);

        res.send([
            {
                "name": "Brightness",
                "type": "video",
                "score": brightness,
            },
            {
                "name": "Contrast",
                "type": "video",
                "score": contrast,
            },
            {
                "name": "Temperature",
                "type": "video",
                "score": temperature,
            },
            {
                "name": "Loudness",
                "type": "audio",
                "score": loudness,
            },
            {
                "name": "BPM",
                "type": "audio",
                "score": bpm,
            }
        ]);
    }
);

app.get("/cli_avg/raw", (req, res) => {
    res.send([
        {
            "name": "Brightness",
            "type": "video",
            "score": 0.5 + 0.5 * Math.random(),
        },
        {
            "name": "Contrast",
            "type": "video",
            "score": 0.5 + 0.5 * Math.random(),
        },
        {
            "name": "Temperature",
            "type": "video",
            "score": 0.5 + 0.5 * Math.random(),
        },
        {
            "name": "Loudness",
            "type": "audio",
            "score": 0.5 + 0.5 * Math.random(),
        },
        {
            "name": "BPM",
            "type": "audio",
            "score": 0.5 + 0.5 * Math.random(),
        }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server launching on port ${PORT}`);
});
