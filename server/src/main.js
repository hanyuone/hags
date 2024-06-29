import express from "express";
import multer from "multer";
import { extract_brightness } from './cognitive_index.js';

const PORT = 3000;
const UPLOAD_PATH = "uploads/";

const upload = multer({ dest: UPLOAD_PATH });

const app = express();

app.post("/cli", upload.single("screenshot"), async (req, res) => {
    const imagePath = req.file.path;
    const brightness = await extract_brightness(imagePath);

    res.send({
        "brightness": brightness,
        "temperature": 0,
        "filePath": imagePath,
    });
});

app.listen(PORT, () => {
    console.log(`Server launching on port ${PORT}`);
});
