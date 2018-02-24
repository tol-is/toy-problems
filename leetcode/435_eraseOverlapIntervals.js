/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if (intervals.length === 0) return 0;
    
    intervals.sort((a, b) => a.end === b.end ? b.start - a.start : a.end - b.end);
    
    let lastEnd = intervals[0].end;

    let result = 0;
    for (let i = 1; i < intervals.length; i++) {
        const { start, end } = intervals[i];
        if (start < lastEnd) result += 1;
        else lastEnd = end;
    }
    
    return result;
};
