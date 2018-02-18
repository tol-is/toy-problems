/**
 * @param {string} s
 * @return {string}
 */
const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);

var reverseVowels = function(s) {
    const results = s.split('');
    let lo = 0;
    let hi = results.length - 1;
    
    while (lo < hi) {
        if (isVowel(results[lo]) && isVowel(results[hi])) {
            swap(results, lo++, hi--);
        }
        if (!isVowel(results[lo])) lo++;
        if (!isVowel(results[hi])) hi--;
    }
    
    return results.join('');
};

const isVowel = c => VOWELS.has(c.toLowerCase());

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
