/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    const patterns = pattern.split('');
    const words = str.split(' ');
    const mapping = {};
    const seenWords = new Set();
    
    if (patterns.length !== words.length) {
        return false;
    }
    
    for (let i = 0; i < patterns.length; i++) {
        if (!mapping.hasOwnProperty(patterns[i])) {
            if (seenWords.has(words[i])) {
                return false;
            }
            
            mapping[patterns[i]] = words[i];
            seenWords.add(words[i]);
        } else {
            if (mapping[patterns[i]] !== words[i]) {
                return false;
            }
        }
    }
    
    return true;
};
