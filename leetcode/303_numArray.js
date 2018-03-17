/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.cumulated = [];
    
    let runningTotal = 0;
    for (let num of nums) {
        runningTotal += num;
        this.cumulated.push(runningTotal);
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.cumulated[j] - (this.cumulated[i - 1] || 0);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */
 