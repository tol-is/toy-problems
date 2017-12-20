/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    const lenA = A.length;
    const lenB = B.length;
    
    let times = Math.ceil(lenB / lenA);
    
    let repeated = Array(times).fill(A).join('');
    if (repeated.indexOf(B) >= 0) return times;
    return repeated.concat(A).indexOf(B) >= 0 ? times + 1 : -1;
};
