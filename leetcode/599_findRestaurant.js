/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const sums = {};
    let minSoFar = Number.POSITIVE_INFINITY;
    let minItems = [];
    for (let i = 0; i < list1.length; i++) {
        const restaurant = list1[i];
        sums[restaurant] = i;
    }
    for (let i = 0; i < list2.length; i++) {
        const restaurant = list2[i];
        if (sums[restaurant] !== undefined) {
            let sum = sums[restaurant] + i;
            if (sum < minSoFar) {
                minSoFar = sum;
                minItems = [restaurant];
            } else if (sum === minSoFar) {
                minItems.push(restaurant);
            }
        }
    }
    return minItems;
};