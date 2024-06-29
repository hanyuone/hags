import express from "express";
import multer from "multer";

const PORT = 3000;
const UPLOAD_PATH = "uploads/";

const upload = multer({ dest: UPLOAD_PATH });

const app = express();

app.post("/cli", upload.single("screenshot"), (req, res) => {
    const imagePath = req.file.path;

    res.send({
        // TODO: fill in brightness and temperature values
        "brightness": 0,
        "temperature": 0,
        "filePath": imagePath,
    });
});

app.listen(PORT, () => {
    console.log(`Server launching on port ${PORT}`);
});
