/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const results = [];
    let currentLineArr = [];
    let currentLineLength = 0;
    let spacedLine;
    
    for (let word of words) {
        if (!canFit(word, currentLineArr, currentLineLength, maxWidth)) {
            spacedLine = fillSpace(currentLineArr, currentLineLength, maxWidth, false);
            results.push(spacedLine)
            currentLineArr = [];
            currentLineLength = 0;
        }
        currentLineArr.push(word);
        currentLineLength += word.length;
    }
    spacedLine = fillSpace(currentLineArr, currentLineLength, maxWidth, true);
    results.push(spacedLine);
    
    return results;
};

var canFit = (word, lineArr, lineLength, maxWidth) => {
    return (word.length + lineArr.length + lineLength) <= maxWidth;
};

var fillSpace = (lineArr, lineLength, maxWidth, lastLine) => {
    const whiteSpaceCount = maxWidth - lineLength;
    if (lineArr.length === 1 || lastLine) {
        return lineArr.join(' ') + genWhiteSpace(whiteSpaceCount - (lineArr.length - 1));
    }
    let result = '';
    const whiteSpacePerWord = Math.floor(whiteSpaceCount / (lineArr.length - 1));
    const extraWhiteSpace = whiteSpaceCount % (lineArr.length - 1);
    
    for (let i = 0; i < lineArr.length; i++) {
        const word = lineArr[i];
        result += word;
        if (i < lineArr.length - 1) {
            const n = whiteSpacePerWord + (i < extraWhiteSpace ? 1 : 0);
            result += genWhiteSpace(n);
        }
    }
    
    return result;
};

var genWhiteSpace = (n) => {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += ' ';
    }
    return result;
};