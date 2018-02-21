/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let num1 = null;
    let num2 = null;
    let count1 = 0;
    let count2 = 0;
    
    for (let num of nums) {
        if (num1 === num) {
            count1 += 1;
        } else if (num2 === num) {
            count2 += 1;
        } else if (count1 === 0) {
            num1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            num2 = num;
            count2 = 1;
        } else {
            count1 -= 1;
            count2 -= 1;
        }
    }
    
    count1 = 0;
    count2 = 0;
    
    for (let num of nums) {
        if (num1 === num) count1 += 1;
        else if (num2 === num) count2 += 1;
    }

    const results = [];
    if (count1 > nums.length / 3) results.push(num1);
    if (count2 > nums.length / 3) results.push(num2);
    return results;
};
