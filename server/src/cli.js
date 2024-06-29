export function getCLI(videoPath) {

}

export function mean(values, weightings) {
    let result = 1;

    for (let i = 0; i < values.length; i++) {
        const value = values[i];
        const weighting = weightings[i];

        result += value * weighting;
    }

    return result;
}
