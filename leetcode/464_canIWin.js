/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal, choices = 0, isPlayer1 = true, memo = {}) {
    if (maxChoosableInteger * (maxChoosableInteger + 1) / 2 < desiredTotal) return false;
    
    for (let i = 1; i <= maxChoosableInteger; i++) {
        if (choices & (1 << i)) continue;
        if (i >= desiredTotal) return true;
        
        const nextChoices = choices | (1 << i);
        if (memo[nextChoices] === undefined) {
            memo[nextChoices] = canIWin(maxChoosableInteger, desiredTotal - i, choices | (1 << i), !isPlayer1, memo);
        }
        if (!memo[nextChoices]) return true;
    }
    return false;
};
