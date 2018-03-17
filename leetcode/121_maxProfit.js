/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let lowest = prices[0];
    let highest = lowest;
    
    for (let price of prices) {
        if (price < lowest) {
            lowest = price;
            highest = price;
        }
        if (price > highest) {
            highest = price;
            max = Math.max(highest - lowest, max);
        }
    }
    
    return max;
};
