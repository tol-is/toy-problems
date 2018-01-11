/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2, lo1 = 0, hi1 = s1.length, lo2 = 0, hi2 = s2.length) {
    const len = hi1 - lo1;
    
    if (!haveSameChars(s1, s2, lo1, hi1, lo2, hi2)) return false;
    if (len === 1) return s1.charAt(lo1) === s2.charAt(lo2);

    for (let i = 1; i < len; i++) {
        if (isScramble(s1, s2, lo1, lo1 + i, lo2, lo2 + i) && isScramble(s1, s2, lo1 + i, hi1, lo2 + i, hi2)) return true;
        if (isScramble(s1, s2, lo1, hi1 - i, lo2, hi2 - i) && isScramble(s1, s2, hi1 - i, hi1, hi2 - i, hi2)) return true;
        if (isScramble(s1, s2, lo1, lo1 + i, hi2 - i, hi2) && isScramble(s1, s2, lo1 + i, hi1, lo2, hi2 - i)) return true;
        if (isScramble(s1, s2, lo1, hi1 - i, lo2 + i, hi2) && isScramble(s1, s2, hi1 - i, hi1, lo2, lo2 + i)) return true;
    }
    
    return false;
};

var haveSameChars = (s1, s2, lo1, hi1, lo2, hi2) => s1.slice(lo1, hi1).split('').sort().join('') === s2.slice(lo2, hi2).split('').sort().join('');
