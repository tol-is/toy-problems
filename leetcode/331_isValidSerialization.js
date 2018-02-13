/**
 * @param {string} preorder
 * @return {boolean}
 */

var isValidSerialization = function(preorder) {
    preorder = preorder.split(',');
    const stack = [1];
    for (let node of preorder) {
        if (stack.length === 0) return false;
        stack[stack.length - 1] += 1;
        stack.push(node === '#' ? 2 : 0);
        while (stack[stack.length - 1] === 2) stack.pop();
    }
    return stack.length === 0;
};
