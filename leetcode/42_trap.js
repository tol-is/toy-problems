/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const n = height.length;
    const highestOnLeft = [];
    const highestOnRight = [];
    highestOnLeft[0] = 0;
    highestOnRight[n - 1] = 0;
    
    for (let i = 1; i < n; i++) {
        highestOnLeft[i] = Math.max(highestOnLeft[i - 1], height[i - 1]);
    }
    for (let i = height.length - 2; i >= 0; i--) {
        highestOnRight[i] = Math.max(highestOnRight[i + 1], height[i + 1]);
    }
    
    let result = 0;
    for (let i = 0; i < n; i++) {
        const minSide = Math.min(highestOnLeft[i], highestOnRight[i]);
        if (minSide > height[i]) result += (minSide - height[i]);
    }
    return result;
};
