/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let result = 0;
    
    for (let i = 1; i < timeSeries.length; i++) {
        result += Math.min(timeSeries[i] - timeSeries[i - 1], duration);
    }
    
    return result + (timeSeries.length ? duration : 0);
};
