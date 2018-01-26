/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    senate = senate.split('');
    
    let seenR = false;
    let seenD = false;
    let balance = 0;
    do {
        seenR = false;
        seenD = false;
        
        for (let i = 0; i < senate.length; i++) {
            if (senate[i] === 'R') {
                seenR = true;
                if (balance < 0) {
                    senate[i] = null;
                }
                balance += 1;
            } else if (senate[i] === 'D') {
                seenD = true;
                if (balance > 0) {
                    senate[i] = null;
                }
                balance -= 1;
            }
        }    
    }
    while (seenR === seenD);
    
    return seenR ? 'Radiant' : 'Dire';
};
