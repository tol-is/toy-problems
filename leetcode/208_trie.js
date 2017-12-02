/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.storage = [];
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let storage = this.storage;
    
    for (let i = 0; i < word.length; i++) {
        const index = word.charCodeAt(i) - 97;
        
        if (!storage[index]) {
            storage[index] = [false, []];
        }
        if (i === word.length - 1) {
            storage[index][0] = true;
        }
        storage = storage[index][1];
    }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let storage = this.storage;
    
    for (let i = 0; i < word.length; i++) {
        const index = word.charCodeAt(i) - 97;
        
        if (!storage[index]) {
            return false;
        } else {
            if (i === word.length - 1) {
                return storage[index][0];
            }
            storage = storage[index][1];
        }
    }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let storage = this.storage;
    
    for (let i = 0; i < prefix.length; i++) {
        const index = prefix.charCodeAt(i) - 97;
        
        if (!storage[index]) {
            return false;
        } else {
            storage = storage[index][1];
        }
    }
    
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */