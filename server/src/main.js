import express from "express";
import multer from "multer";
import { extract_brightness, extract_temperature, extract_contrast, extractFrameBrightness } from './video.js';
import { extract_bpm, extract_loudness, processAudio } from "./audio.js";

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

        const brightness = await extractFrameBrightness(imagePath, 'uploads');
        const contrast = await extract_contrast(imagePath);
        const temperature = await extract_temperature(imagePath);

        const audioVec = processAudio(audioPath);
        const loudness = extract_loudness(audioVec);
        const bpm = extract_bpm(audioVec);

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
