/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    
    let longestPrefix = strs[0];
    for (let str of strs) {
        longestPrefix = getLongestPrefix(longestPrefix, str);
    }
    return longestPrefix;
};

const getLongestPrefix = (prefix, str) => {
    if (str.length < prefix.length) return getLongestPrefix(str, prefix);
    let i = 0;
    while (i < prefix.length && prefix[i] === str[i]) i++;
    return prefix.slice(0, i);
};
