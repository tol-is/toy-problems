/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    const lowestTwo = [];
    const highestThree = [];
    var i;
    
    for (var num of nums) {
        if (lowestTwo.length < 2) {
            lowestTwo[lowestTwo.length] = num;
        } else if (num < lowestTwo[1]) {
            lowestTwo[1] = num;
        }
        i = lowestTwo.length - 1;
        while (i > 0 && lowestTwo[i] < lowestTwo[i - 1]) {
            swap(lowestTwo, i, i - 1);
            i -= 1;
        }
        
        if (highestThree.length < 3) {
            highestThree[highestThree.length] = num;
        } else if (num > highestThree[2]) {
            highestThree[2] = num;
        }
        i = highestThree.length - 1;
        while (i > 0 && highestThree[i] > highestThree[i - 1]) {
            swap(highestThree, i, i - 1);
            i -= 1;
        }
    }
    console.log(lowestTwo, highestThree);
    return Math.max(
        highestThree[0] * highestThree[1] * highestThree[2],
        highestThree[0] * lowestTwo[0] * lowestTwo[1]
    );
};

const swap = (arr, i, j) => {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};