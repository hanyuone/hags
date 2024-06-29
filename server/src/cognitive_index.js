import sharp from 'sharp';
import color from 'color-temperature';

export async function extract_brightness(imagePath) {
    const image = sharp(imagePath);
    const { data, info } = await image
        .raw()
        .toBuffer({ resolveWithObject: true });

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



