/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) return [];
    
    intervals.sort((a, b) => a.start - b.start);
    
    const results = [];
    
    let curr = intervals.shift();
    let next = intervals.shift();
    while (next) {
        const merged = getMerged(curr, next);
        if (merged) {
            curr = merged;
        } else {
            results.push(curr);
            curr = next;
        }
        next = intervals.shift();
    }
    
    results.push(curr);
    
    return results;
};

const getMerged = (a, b) => {
    if (b.start <= a.end) return new Interval(a.start, Math.max(a.end, b.end));
    return null;
};
