/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1 = version1.split('.').map(n => parseInt(n));
    const v2 = version2.split('.').map(n => parseInt(n));
    
    for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
        v1[i] = v1[i] || 0;
        v2[i] = v2[i] || 0;
        
        if (v1[i] < v2[i]) return -1;
        if (v1[i] > v2[i]) return 1;
    }
    return 0;
};
