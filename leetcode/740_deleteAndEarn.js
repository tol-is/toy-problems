/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    const count = Array(10001).fill(0);
    
    for (let num of nums) {
        count[num] += num;
    }
    
    let max = 0;
    
    for (let i = 1; i < 10001; i++) {
        const take = count[i] + (count[i - 2] || 0);
        const drop = count[i - 1];
        count[i] = Math.max(take, drop);
        max = Math.max(max, count[i]);
    }
    return max;
};
