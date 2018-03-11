/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
    const fractions = getFractions(expression);
    let curr = [0, 1];
    
    for (let [num, denom] of fractions) {
        const lcd = getLcd(curr[1], denom);
        curr[0] *= lcd / curr[1];
        curr[0] += num * lcd / denom;
        curr[1] = lcd;
    }
    
    if (curr[0]) {
        const gcd = getGcd(Math.abs(curr[0]), curr[1]);
        curr = curr.map(e => e / gcd);
    } else {
        curr[1] = 1;
    }
    
    return curr.join('/');
};

const getFractions = (expression) => {
    const results = [];
    
    let curr = [];
    const chars = expression.split('');
    
    for (let i = 0; i < chars.length; i++) {
        const c = chars[i];
        if (i > 0 && (c === '-' || c === '+')) {
            results.push(getFraction(curr));
            curr = [];
        }
        curr.push(c);
    }
    results.push(getFraction(curr));
    
    return results;
};

const getFraction = fraction => fraction.join('').split('/').map(e => parseInt(e));

const getGcd = (a, b) => a ? getGcd(b % a, a) : b;

const getLcd = (a, b) => a * b / getGcd(a, b);
