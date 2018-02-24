/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const count = {};
    for (let c of s) {
        count[c] = (count[c] || 0) + 1;
    }

    let result = 0;
    let hasOdd = false;
    for (let c in count) {
        if (count[c] % 2 === 0) {
            result += count[c];
        } else {
            result += (count[c] - 1);
            hasOdd = true;
        }
    }
    return result + (hasOdd ? 1 : 0);
};
