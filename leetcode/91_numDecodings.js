/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const dp = [];
    dp[s.length - 1] = oneValid(s, s.length - 1) ? 1 : 0;

    for (let i = s.length - 2; i >= 0; i--) {
        dp[i] = oneValid(s, i) ? (dp[i + 1] || 0) : 0;
        if (twoValid(s, i)) dp[i] += (i + 2 >= s.length ? 1 : dp[i + 2]);
    }

    return dp[0] || 0;
};

const oneValid = (s, i) => s[i] !== '0';
const twoValid = (s, i) => s[i] === '1' || (s[i] === '2' && s[i + 1] <= '6');
