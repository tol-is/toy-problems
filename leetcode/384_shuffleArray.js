/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.original = nums;
    this.shuffled = nums.slice();
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.shuffled = this.original.slice();
    return this.shuffled;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    for (let i = this.shuffled.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        swap(this.shuffled, i, j);
    }
    return this.shuffled;
};

const swap = (arr, i, j) => {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
 