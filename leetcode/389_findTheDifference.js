/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let count = 0;
    for (let i = 0, len = s.length; i < len; i++) {
        const code = s.charCodeAt(i) - 97;
        count ^= (1 << code);
    }
    for (let i = 0, len = t.length; i < len; i++) {
        const code = t.charCodeAt(i) - 97;
        count ^= (1 << code);
    }
    let code = 0;
    while (count !== 1) {
        count >>>= 1;
        code += 1;
    }
    return String.fromCharCode(code + 97);
};
