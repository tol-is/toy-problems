/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const count = {};
    for (let num of nums1) {
        count[num] = (count[num] || 0) + 1;
    }
    
    const result = [];
    for (let num of nums2) {
        if (count[num]) {
            count[num] -= 1;
            result.push(num);
        }
    }
    
    return result;
};
