/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => a - b);
    for (let i = 0; i < citations.length; i++) {
        const prev = citations[i - 1] || 0;
        const curr = citations[i];
        const h = citations.length - i;
        
        if (curr >= h && prev <= h) return h;
    }
    return 0;
};
