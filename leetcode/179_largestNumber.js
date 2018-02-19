/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort(comparator);
    if (nums[0] === 0) return '0';
    return nums.join('');
};

const comparator = (a, b) => {
    if (a === b) return 0;
    
    a = a.toString();
    b = b.toString();
    
    return a + b > b + a ? -1 : 1;
};
