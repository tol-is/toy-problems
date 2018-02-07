/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
    this.storage = [];
    this.indices = {};
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
    let newVal = false;
    if (!this.indices[val]) {
        this.indices[val] = new Set();
        newVal = true;
    }
    this.indices[val].add(this.storage.length);
    this.storage.push(val);
    
    return newVal;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    if (!this.indices[val]) return false;
    
    const i = this.indices[val].values().next().value;
    this.indices[val].delete(i);
    if (this.indices[val].size === 0) delete this.indices[val];
    
    if (i !== this.storage.length - 1) {
        swap(this.storage, i, this.storage.length - 1);
        const swapInVal = this.storage[i];
        const originalI = this.storage.length - 1;
        this.indices[swapInVal].delete(originalI);
        this.indices[swapInVal].add(i);
    }
    this.storage.pop();
    
    return true;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
    return this.storage[Math.floor(Math.random() * this.storage.length)];
};

const swap = (arr, i, j) => {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};

/** 
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = Object.create(RandomizedCollection).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
 