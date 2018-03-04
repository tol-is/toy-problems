/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.values = [];
    this.indices = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.indices.hasOwnProperty(val)) return false;
    
    this.indices[val] = this.values.length;
    this.values.push(val);
    
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.indices.hasOwnProperty(val)) return false;
    
    const index = this.indices[val];
    delete this.indices[val];
    
    const swappedVal = this.values.pop();
    
    if (index !== this.values.length) {
        this.values[index] = swappedVal;
        this.indices[swappedVal] = index;
    }
    
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.values[Math.floor(Math.random() * this.values.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
 