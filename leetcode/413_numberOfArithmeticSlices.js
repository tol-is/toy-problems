/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    const segmentLengths = [2];
    let diff = A[1] - A[0];
    
    for (let i = 2; i < A.length; i++) {
        const newDiff = A[i] - A[i - 1];
        if (newDiff === diff) {
            segmentLengths[segmentLengths.length - 1] += 1;
        } else {
            diff = newDiff;
            segmentLengths.push(2);
        }
    }
    
    let result = 0;
    for (let len of segmentLengths) {
        if (len > 2) result += getCount(len);
    }
    return result;
};

const getCount = len => (len - 2) * (len - 1) / 2;
