/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const kLargest = [];
    for (let num of nums) {
        kLargest.push(num);
        sort(kLargest);
        if (kLargest.length > k) {
            kLargest.pop();
        }
    }
    return kLargest[k - 1];
};

const sort = (arr) => {
    let i = arr.length - 1;
    while (i > 0 && arr[i] > arr[i - 1]) {
        const tmp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = tmp;
        i -= 1;
    }
};
