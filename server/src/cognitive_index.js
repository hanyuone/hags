import sharp from 'sharp';
import color from 'color-temperature';
import { extractColors } from 'extract-colors';
import ffmpeg from 'fluent-ffmpeg'
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import fs from 'fs';
import path from 'path';

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

// As defined in https://www.w3.org/TR/WCAG/#dfn-contrast-ratio
function luminanceClamp(colour) {
    if (colour <= 0.04045) {
        return colour / 12.92;
    } else {
        return ((colour + 0.055) / 1.055) ** 2.4;
    }
}

// As defined in https://www.w3.org/TR/WCAG/#dfn-relative-luminance
// R, G, B are in range [0, 1]
function relativeLuminance(r, g, b) {
    const rClamp = luminanceClamp(r);
    const gClamp = luminanceClamp(g);
    const bClamp = luminanceClamp(b);

    return 0.2126 * rClamp + 0.7152 * gClamp + 0.0722 * bClamp;
}

export async function extract_brightness(chunk) {
    try {
        const image = sharp(chunk);
        const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

        let totalLuminance = 0;
        let pixelCount = info.width * info.height; // Total number of pixels

        for (let i = 0; i < data.length; i += info.channels) {
            let r = data[i] / 255;
            let g = data[i + 1] / 255;
            let b = data[i + 2] / 255;
            // Calculate luminance for each pixel
            let luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
            totalLuminance += luminance;
        }

        // Calculate average luminance
        let averageLuminance = totalLuminance / pixelCount;
        return averageLuminance;
    } catch (err) {
        throw err;
    }
}

export async function extract_temperature(imagePath) {
    const image = sharp(imagePath).resize(1,1);

    const { data } = await image
        .raw()
        .toBuffer({ resolveWithObject: true });

    const rgb = [data[0], data[1], data[2]].map(value => value / 255);   
    const kelvin = color.rgb2colorTemperature(rgb);
    return kelvin;
}

export async function getContrast(imagePath) {
    const image = sharp(imagePath);
    const { data: buffer, info } = await image
        .raw()
        .toBuffer({ resolveWithObject: true });

    const palette = await extractColors({
        data: new Uint8ClampedArray(buffer),
        width: info.width,
        height: info.height,
    });

    if (palette.length < 2) {
        return 1;
    }
    
    // Measure contrast between top 2 colours
    palette.sort((a, b) => b.area - a.area);
    const [bg, fg] = palette.slice(0, 2);

    let bgLuminance = relativeLuminance(bg.red, bg.green, bg.blue);
    let fgLuminance = relativeLuminance(fg.red, fg.green, fg.blue);

    let ratio;
    if (bgLuminance > fgLuminance) {
        ratio = (bgLuminance + 0.05) / (fgLuminance + 0.05);
    } else {
        ratio = (fgLuminance + 0.05) / (bgLuminance + 0.05);
    }

    if (ratio > 4.5) {
        return 1;
    } else {
        return ratio / 4.5;
    }
}

export async function extractFrameBrightness(videoPath, frameOutputPath) {
    ffmpeg.setFfmpegPath(ffmpegInstaller.path);
    let totalBrightness = 0;
    let frameCount = 0;

    return new Promise((resolve, reject) => {
        ffmpeg(videoPath)
        .outputOptions(['-vf fps=1'])
        .output(`${frameOutputPath}/%d.png`)
        .on('end', async function() {
            let frames = fs.readdirSync(frameOutputPath);
            let totalBrightness = 0;
            for (let frame of frames) {
                const framePath = path.join(frameOutputPath, frame);
                if (fs.existsSync(framePath)) {
                    try {
                        let brightness = await extract_brightness(framePath);
                        totalBrightness += brightness;
                        frameCount++;
                    } catch (error) {
                        continue;
                    }
                } else {
                    console.error('Missing frame:', framePath);
                }
            }
            let averageBrightness = totalBrightness / frames.length;
            console.log(`Average Brightness: ${averageBrightness}`);
            resolve(averageBrightness);
        })
        .run();
    });
}
