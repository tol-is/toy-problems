/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const set = new Set();
    for (let i = 1; i <= nums.length; i++) {
        set.add(i);
    }
    const result = [];
    for (let num of nums) {
        if (set.has(num)) set.delete(num);
        else result.push(num);
    }
    return result.concat(Array.from(set));
};
