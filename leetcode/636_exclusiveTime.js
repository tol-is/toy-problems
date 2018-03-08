/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    const stack = [];
    const results = Array(n).fill(0);
    
    let lastTime = 0;
    
    for (let log of logs) {
        const [fn, op, time] = log.split(':').map(e => isNaN(e) ? e : parseInt(e));
        let lastFn = stack[stack.length - 1];
        let duration = null;
        
        if (op === 'start') {
            stack.push(fn);
            duration = time - lastTime;
            lastTime = time;
        } else {
            stack.pop();
            duration = time - lastTime + 1;
            lastTime = time + 1;
        }
        
        if (lastFn !== undefined) results[lastFn] += duration;
    }
    
    return results;
};
