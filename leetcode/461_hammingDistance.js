/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    const diff = x ^ y;
    const bitString = diff.toString(2);
    let result = 0;
    for (let c of bitString) {
        if (c === '1') {
            result += 1;
        }
    }
    return result;
};