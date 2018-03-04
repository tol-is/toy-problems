/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {    
    this.lists = [nestedList];
    this.indices = [-1];
    this.nextElement = undefined;
    this.prepareNext();
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return this.lists.length > 0;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    const result = this.nextElement;
    this.prepareNext();
    return result;
};

NestedIterator.prototype.prepareNext = function() {
    if (this.lists.length === 0) return;
    
    this.indices[0] += 1;
    const nestedInt = this.lists[0][this.indices[0]];
    
    if (nestedInt === undefined) {
        this.lists.shift();
        this.indices.shift();
        this.prepareNext();
    } else {
        if (nestedInt.isInteger()) {
            this.nextElement = nestedInt.getInteger();
        } else {
            this.lists.unshift(nestedInt.getList());
            this.indices.unshift(-1);
            this.prepareNext();
        }
    }
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
