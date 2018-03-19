/**
 * @param {string[]} tokens
 * @return {number}
 */
const OPS = new Set(['+', '-', '*', '/']);

var evalRPN = function(tokens) {
    const stack = [];
    for (let token of tokens) {
        if (OPS.has(token)) stack.push(calculate(token, stack.pop(), stack.pop()));
        else stack.push(parseInt(token));
    }
    return stack[0];
};

const calculate = (op, b, a) => {
    if (op === '+') return a + b;
    if (op === '-') return a - b;
    if (op === '*') return a * b;
    if (op === '/') return Math.trunc(a / b);
};
