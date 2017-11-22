/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let lastChar = null;
    let count = 0;
    let pointer = 0;
    
    for (let i = 0; i <= chars.length; i++) {
        const c = chars[i];
        
        if (c === lastChar) {
            count += 1;
        } else {
            if (lastChar !== null) {
                chars[pointer] = lastChar;
                pointer += 1;
            }
            lastChar = c;
            
            if (count > 1) {
                const numberString = count.toString();
                for (let digit of numberString) {
                    chars[pointer] = digit;
                    pointer += 1;
                }
            }            
            count = 1;
        }
    }
    
    while (chars.length > pointer) {
        chars.pop();
    }
    
    return pointer;
};