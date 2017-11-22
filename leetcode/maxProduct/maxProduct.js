/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    const binWords = words.map(getBinWord);
    
    let maxSoFar = 0;
    
    for (let i = 0; i < binWords.length; i++) {
        for (let j = i + 1; j < binWords.length; j++) {
            if ((binWords[i] & binWords[j]) === 0) {
                maxSoFar = Math.max(maxSoFar, words[i].length * words[j].length);
            }
        }
    }
    
    return maxSoFar;
};

var getBinWord = (word) => {
    let result = 0;
    let chars = new Set()
    for (let c of word) {
        if (chars.has(c)) {
            continue;
        }
        chars.add(c);
        const index = c.charCodeAt() - 97;
        result += (2 ** index);
    }
    return result;
};