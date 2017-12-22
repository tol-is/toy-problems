const getDist = (pair) => {
  if (!pair) return Number.POSITIVE_INFINITY;
  const [[x1, y1], [x2, y2]] = pair;
  return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
};

// Calculate a pair of closest points
function closestPair( points0 ){
  const sortedX = points0.slice().sort((a, b) => a[0] - b[0]);
  const sortedY = points0.slice().sort((a, b) => a[1] - b[1]);
  
  const recursiveFunc = (points) => {
    if (points.length <= 1) return null;
    if (points.length === 2) return points;
    
    const mid = Math.floor(points.length / 2);
    const leftHalf = points.slice(0, mid);
    const rightHalf = points.slice(mid);
    const center = points[mid - 1];
    
    const leftPair = recursiveFunc(leftHalf);
    const rightPair = recursiveFunc(rightHalf);
    
    let minPair = getDist(leftPair) < getDist(rightPair) ? leftPair : rightPair;
    let midDist = getDist(minPair);
    
    const strip = sortedY.filter(p => Math.abs(center[0] - p[0]) < midDist);
    for (let i = 0; i < Math.max(1, strip.length - 7); i++) {
      for (let j = 1; j <= 7, i + j < strip.length; j++) {
        const pair = [strip[i], strip[i + j]];
        const pairDist = getDist(pair);
        if (pairDist < midDist) {
          minPair = pair;
          midDist = pairDist;
        }
      }
    }
    
    return minPair;
  }
  
  return recursiveFunc(sortedX);
}
