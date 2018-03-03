/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.chars = [];
    this.vals = {};
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    const oldVal = this.vals[key] || 0;
    this.vals[key] = val;
    
    let chars = this.chars;
    let tuple = null;
    
    for (let i = 0; i < key.length; i++) {
        const index = key.charCodeAt(i);
        if (!chars[index]) chars[index] = [[], 0];
        tuple = chars[index];
        tuple[1] = tuple[1] + val - oldVal;
        chars = tuple[0];
    }
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let chars = this.chars;
    let tuple = null;
    
    for (let i = 0; i < prefix.length; i++) {
        const index = prefix.charCodeAt(i);
        if (!chars[index]) return 0;
        tuple = chars[index];
        chars = tuple[0];
    }
    
    return tuple[1];
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = Object.create(MapSum).createNew()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
 