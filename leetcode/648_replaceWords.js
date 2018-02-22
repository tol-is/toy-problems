/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
    const trie = new Trie();
    for (let word of dict) {
        trie.insert(word);
    }
    
    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const root = trie.getShortestRoot(word);
        if (root) words[i] = root;
    }
    
    return words.join(' ');
};
    
class Trie {
    constructor() {
        this.chars = [];
    }
    
    insert(word) {
        let chars = this.chars;
        let tuple = null;
        let index = 0;
        for (let i = 0; i < word.length; i++) {
            index = word.charCodeAt(i) - 97;
            if (!chars[index]) chars[index] = [false, []];
            tuple = chars[index];
            chars = tuple[1];
        }
        tuple[0] = true;
    }
    
    getShortestRoot(word) {
        let chars = this.chars;
        let index = 0;
        for (let i = 0; i < word.length; i++) {
            index = word.charCodeAt(i) - 97;
            if (!chars[index]) return null;
            if (chars[index][0]) return word.slice(0, i + 1);
            chars = chars[index][1];
        }
        return null;
    }
}
