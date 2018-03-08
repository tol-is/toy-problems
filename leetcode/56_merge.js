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
    intervals.sort((a, b) => a.start - b.start);
    
    const results = [];
    
    for (let interval of intervals) {
        const lastInterval = results[results.length - 1];
        if (!lastInterval || lastInterval.end < interval.start) results.push(interval);
        else lastInterval.end = Math.max(lastInterval.end, interval.end);
    }
    
    return results;
};
