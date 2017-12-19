/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const topThree = [];
    nums = Array.from(new Set(nums));
    
    for (let num of nums) {
        topThree.push(num);
        bubbleUp(topThree);
        if (topThree.length > 3) topThree.pop();
    }
    
    return topThree[topThree.length === 3 ? 2 : 0];
};

const bubbleUp = (arr) => {
    let i = arr.length - 1;
    while (i > 0) {
        if (arr[i] <= arr[i - 1]) break;
        const tmp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = tmp;
        i -= 1;
    }
};
