/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s, lo = 0, hi = s.length - 1, skipped = false) {
    while (lo < hi) {
        if (s[lo] === s[hi]) {
            lo++;
            hi--;
        } else {
            if (skipped) return false;
            return validPalindrome(s, lo + 1, hi, true) || validPalindrome(s, lo, hi - 1, true);
        }
    }
    return true;
};
