/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    d.sort(comparator);

    for (let word of d) {
        if (canForm(s, word)) return word;
    }
    return '';
};

const comparator = (a, b) => {
    if (a.length !== b.length) return b.length - a.length;
    return a < b ? -1 : 1;
};

const canForm = (s, word) => {
    let i = 0;
    let j = 0;
    
    while (j < word.length) {
        while (s.charAt(i) !== word.charAt(j)) {
            if (i >= s.length) return false;
            i += 1;
        }
        i += 1;
        j += 1;
    }
    return true;
};
