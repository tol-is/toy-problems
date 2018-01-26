/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const queue = [];
    const results = [];
    
    if (nums.length === 0) return results;
    
    for (let i = 0; i < k; i++) {
        addNumToQueue(queue, nums[i]);
    }
    
    results.push(queue[0]);
    
    for (let i = k; i < nums.length; i++) {
        if (queue[0] === nums[i - k]) queue.shift();
        addNumToQueue(queue, nums[i]);
        results.push(queue[0]);
    }
    
    return results;
};

const addNumToQueue = (queue, n) => {
    while (queue.length > 0 && queue[queue.length - 1] < n) {
        queue.pop();
    }
    queue.push(n);
};
