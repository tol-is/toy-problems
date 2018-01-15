/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const tokens = [];
    let lastNum = 0;
    let lastOperator = '+';
    for (let i = 0; i <= s.length; i++) {
        const c = s[i];
        
        if (c === ' ') continue;
        
        if (Number.isNaN(parseInt(c))) {
            if (lastOperator === '+') {
                tokens.push(lastNum);
            } else if (lastOperator === '-') {
                tokens.push(0 - lastNum);
            } else if (lastOperator === '*') {
                tokens.push(tokens.pop() * lastNum);
            } else if (lastOperator === '/') {
                tokens.push(Math.trunc(tokens.pop() / lastNum));
            }
            lastOperator = c;
            lastNum = 0;
        } else {
            lastNum = lastNum * 10 + parseInt(c);
        }
    }
    
    return tokens.reduce((num, acc) => num + acc);
};
