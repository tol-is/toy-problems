/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];
    
    for (let asteroid of asteroids) {
        if (asteroid > 0) {
            stack.push(asteroid);
            continue;
        }
        
        let lastAsteroid = stack[stack.length - 1];
        while (lastAsteroid > 0 && lastAsteroid < Math.abs(asteroid)) {
            stack.pop();
            lastAsteroid = stack[stack.length - 1];
        }

        if (lastAsteroid > Math.abs(asteroid)) continue;
        if (lastAsteroid === Math.abs(asteroid)) stack.pop();
        else stack.push(asteroid);
    }
    
    return stack;
};
