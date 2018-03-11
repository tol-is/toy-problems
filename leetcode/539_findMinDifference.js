/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    const points = Array(24 * 60).fill(false);
    
    for (let time of timePoints) {
        const index = getIndex(time);
        if (points[index]) return 0;
        points[index] = true;
    }
    
    let min = Number.POSITIVE_INFINITY;
    
    let i = -1;
    let j = -1;
    
    do { i++ } while (!points[i] && i < points.length);
    const first = i;

    while (true) {
        do { i++ } while (!points[i] && i < points.length);
        do { j++ } while (!points[j] && j < points.length);
        if (i >= points.length) break;
        min = Math.min(min, i - j);
    }
    min = Math.min(min, first + 24 * 60 - j);
    
    return min;
};

const getIndex = (time) => {
    const [hour, min] = time.split(':').map(e => parseInt(e));
    return hour * 60 + min;
};
