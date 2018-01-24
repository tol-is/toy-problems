/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    const seq = [];
    const n = num.length;
    let found = false;
    
    const recurse = (start) => {
        const seqLen = seq.length;
        
        if (start === num.length && seqLen > 2) found = true;
        if (found || start >= num.length) return;
        
        let target = null;
        if (seqLen >= 2) target = seq[seqLen - 1] + seq[seqLen - 2];
        
        for (let i = start + 1; i <= n; i++) {
            if (target !== null) {
                const targetLen = target === 0 ? 1 : Math.log10(target) + 1;
                if (i - start > targetLen) break;
            }
            if (num.charAt(start) === '0' && i - start > 1) break;
            
            const substr = num.slice(start, i);
            if (seqLen < 2 || target === parseInt(substr)) {
                seq.push(parseInt(substr));
                recurse(i);
                seq.pop();
            }
        }
    }
    
    recurse(0);
    return found;
};
