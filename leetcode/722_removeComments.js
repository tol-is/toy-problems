/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function(source) {
    const sourceQueue = source.slice();
    const result = [];
    let inBlock = false;
    let beforeBlock = null;
    
    let line = sourceQueue.shift();
    while (line !== undefined) {
        if (inBlock) {
            const blockEndTagIndex = line.indexOf('*/');
            
            if (blockEndTagIndex >= 0) {
                inBlock = false;
                const afterBlock = line.slice(blockEndTagIndex + 2);
                
                if (afterBlock.length > 0) {
                    line = beforeBlock + afterBlock;
                    continue;
                } else {
                    if (beforeBlock.length > 0) {
                        result.push(beforeBlock);
                    }
                }
            }
        } else {
            const blockStartTagIndex = line.indexOf('/*');
            const inlineTagIndex = line.indexOf('//');
            const hasTag = blockStartTagIndex >= 0 || inlineTagIndex >= 0;
            
            if (hasTag) {
                const firstTagIsInline = blockStartTagIndex < 0 || (inlineTagIndex >= 0 && inlineTagIndex < blockStartTagIndex);
                if (firstTagIsInline) {
                    if (inlineTagIndex > 0) {
                        result.push(line.slice(0, inlineTagIndex));
                    }
                } else {
                    beforeBlock = line.slice(0, blockStartTagIndex);
                    inBlock = true;
                    line = line.slice(blockStartTagIndex + 2);
                    continue;
                }
            } else {
                result.push(line);
            }
        }
        
        line = sourceQueue.shift();
    }
    
    return result;
};
