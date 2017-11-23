/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        const newTarget = target - numbers[i];
        
        if (newTarget === numbers[i]) {
            if (numbers[i - 1] === newTarget) {
                return [i - 1 + 1, i + 1];
            } else if (numbers[i + 1] === newTarget) {
                return [i + 1, i + 1 + 1];
            } else {
                return null;
            }
        }
        
        const searchResult = binarySearch(numbers, newTarget);
        
        if (searchResult > 0) {
            return i < searchResult ? [i + 1, searchResult + 1] : [searchResult + 1, i + 1];
        }
    }
    
    return null;
};

var binarySearch = (numbers, target) => {
    let lo = 0;
    let hi = numbers.length - 1;
    
    while (lo <= hi) {
        let mid = Math.floor((hi + lo) / 2);
        
        if (numbers[mid] > target) {
            hi = mid - 1;
        } else if (numbers[mid] < target) {
            lo = mid + 1;
        } else {
            return mid;
        }
    }
    
    return -1;
};