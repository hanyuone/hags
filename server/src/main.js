import express from "express";
import multer from "multer";
import { extract_brightness, extractFrames, calc_avg, extract_contrast, extract_temperature } from './video.js';
import { extractBpm, extractLoudness, processAudio } from "./audio.js";

const PORT = 3000;

const upload = multer({ dest: "uploads/" });
const app = express();

app.post(
    "/cli",
    upload.fields([
        { name: "screenshot", maxCount: 1 },
        { name: "audio", maxCount: 1 }
    ]),
    async (req, res) => {
        const imagePath = req.files["screenshot"][0].path;
        const audioPath = req.files["audio"][0].path;

        await extractFrames(imagePath, 'uploads')
        const brightness =  await calc_avg('uploads', extract_brightness);
        const contrast =  await calc_avg('uploads', extract_contrast);
        const temperature =  await calc_avg('uploads', extract_temperature);

        const audioVec = processAudio(audioPath);
        const loudness = extractLoudness(audioVec);
        const bpm = extractBpm(audioVec);

        res.send({
            "brightness": brightness,
            "temperature": temperature,
            "contrast": contrast,
            "loudness": loudness,
            "bpm": bpm,
        });
    }
);

app.listen(PORT, () => {
    console.log(`Server launching on port ${PORT}`);
});
