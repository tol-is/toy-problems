/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function(N, K) {
    let i = K - 1;
    let flipped = false;
    while (i > 0) {
        if (i % 2) flipped = !flipped;
        i = Math.floor(i / 2);
    }
    return flipped ? 1 : 0;
};
