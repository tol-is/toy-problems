/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let lastOne = -2;
    let count = 0;
    
    for (let i = 0 ; i < flowerbed.length + 2; i++) {
        if (i === flowerbed.length + 1 || flowerbed[i]) {
            const diff = i - lastOne;
            count += formula(diff);
            lastOne = i;
            
            if (count >= n) {
                return true;
            }
            
            if (count + maxRemaining(flowerbed.length - i) < n) {
                return false;
            }
        }
    }
    
    return false;
};

var formula = n => Math.floor((n - 2) / 2);

var maxRemaining = n => Math.floor(n / 2);