/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hash = {};
    for (let str of strs) {
        const key = getStringifiedCountArray(str);
        if (!hash[key]) hash[key] = [];
        hash[key].push(str);
    }
    
    const result = [];
    for (let k in hash) {
        result.push(hash[k]);
    }
    return result;
};

const getStringifiedCountArray = (str) => {
    const result = [];
    for (let i = 0; i < str.length; i++) {
        const index = str.charCodeAt(i) - 97;
        result[index] = (result[index] || 0) + 1;
    }
    return JSON.stringify(result);
};
