/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    const indices = intervals.slice().map((interval, i) => [interval.start, i]).sort((a, b) => a[0] - b[0]);

    const results = [];
    for (let interval of intervals) {
        results.push(getNextIntervalIndex(indices, interval.end));
    }
    return results;
};

const getNextIntervalIndex = (indices, target, lo = 0, hi = indices.length - 1) => {
    let minIndex = -1;
    
    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);
        const [start, index] = indices[mid];
        
        if (start < target) {
            lo = mid + 1;
        } else if (start > target) {
            minIndex = index;
            hi = mid - 1;
        } else {
            return index;
        }
    }
    
    return minIndex;
};
