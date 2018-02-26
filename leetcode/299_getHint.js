/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    const count = Array(10).fill(0);
    
    for (let c of secret) {
        count[c] += 1;
    }
    
    let bulls = 0;
    let cows = 0;
    for (let i = 0; i < guess.length; i++) {
        const c = guess.charAt(i);
        if (c === secret.charAt(i)) {
            bulls += 1;
        }
        if (count[c] > 0) {
            count[c] -= 1;
            cows += 1;
        }
    }
    
    return `${bulls}A${cows - bulls}B`;
};
