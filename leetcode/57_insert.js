/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    const n = intervals.length;
    if (n === 0) return [newInterval];
    const result = [];
    
    let mergeStart = newInterval.start;
    let mergeEnd = newInterval.end;
    let added = false;
    
    for (let interval of intervals) {
        if (added) {
            result.push(interval);
            continue;
        }
        
        if (mergeEnd < interval.start) {
            result.push(new Interval(mergeStart, mergeEnd), interval);
            added = true;
        } else if (interval.end < mergeStart) {
            result.push(interval);
        } else {
            mergeStart = Math.min(mergeStart, interval.start);
            mergeEnd = Math.max(mergeEnd, interval.end);
        }
    }
    
    if (!added) {
        result.push(new Interval(mergeStart, mergeEnd));
    }
    
    return result;
};
