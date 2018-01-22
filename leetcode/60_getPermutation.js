/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let permCount = fact(n);
    let digits = getRange(1, n);
    const result = [];
    
    while (digits.length) {
        const index = Math.floor((k - 1) / (permCount / digits.length));
        result.push(digits[index]);
        
        k -= index * (permCount / digits.length);
        permCount /= digits.length;
        digits = remove(digits, index);
    }
    
    return result.join('');
};

const fact = (n) => n <= 2 ? n : n * fact(n - 1);

const getRange = (start, end) => {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
};

const remove = (arr, i) => arr.slice(0, i).concat(arr.slice(i + 1));
