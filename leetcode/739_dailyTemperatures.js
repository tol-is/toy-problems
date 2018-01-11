/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const tempToIndex = [];
    const result = [];
    const n = temperatures.length;
    
    for (let i = n - 1; i >= 0; i--) {
        const temp = temperatures[i];
        
        for (let j = 30; j < temp; j++) {
            tempToIndex[j] = i;
        }
        
        result[i] = tempToIndex[temp] ? tempToIndex[temp] - i : 0;
    }
    
    return result;
};
