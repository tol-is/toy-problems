/**
 * @param {string} s
 * @return {string[]}
 */
const DIGITS = { A: 0, C: 1, G: 2, T: 3 };
const CHARS = ['A', 'C', 'G', 'T'];

var findRepeatedDnaSequences = function(s) {
    const sequences = new Set();
    const repeated = new Set();
    
    let sequence = 0;
    for (let i = 0; i < 10; i++) sequence = getNextSequence(sequence, s.charAt(i));
    sequences.add(sequence);
    
    for (let i = 10; i < s.length; i++) {
        sequence = getNextSequence(sequence, s.charAt(i));
        if (sequences.has(sequence)) repeated.add(sequence);
        else sequences.add(sequence);
    }
    
    const results = [];
    for (let seq of repeated) {
        results.push(seqToStr(seq));
    }
    return results;
};

const getNextSequence = (seq, c) => ((seq << 2) + DIGITS[c]) % (1 << 20);

const seqToStr = (seq) => {
    const result = [];
    for (let i = 0; i < 10; i++) {
        result.unshift(CHARS[seq % 4]);
        seq = Math.floor(seq / 4);
    }
    return result.join('');
};
