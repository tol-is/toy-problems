/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack = [[1, []]];
    let sign = 1;
    let currNum = 0;
    
    for (let c of s) {
        if (c === ' ') continue;
        
        if (!isNaN(c)) {
            currNum = currNum * 10 + sign * parseInt(c);
        } else {
            if (currNum) stack[stack.length - 1][1].push(currNum);
            currNum = 0;
        }
        
        if (c === '(') {
            stack.push([sign, []]);
            sign = 1;
        } else if (c === ')') {
            const interimResult = evaluate(stack.pop());
            stack[stack.length - 1][1].push(interimResult);
        } else if (c === '+') {
            sign = 1;
        } else if (c === '-') {
            sign = -1;
        }
    }
    if (currNum) stack[stack.length - 1][1].push(currNum);
    
    return evaluate(stack.pop());
};

const evaluate = ([sign, nums]) => sign * nums.reduce((a, b) => a + b, 0);
