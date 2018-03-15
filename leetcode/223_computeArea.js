/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    const rect1 = getArea(A, B, C, D);
    const rect2 = getArea(E, F, G, H);
    const overlapCoords = getOverlap(A, B, C, D, E, F, G, H);
    const overlapArea = overlapCoords ? getArea(...overlapCoords) : 0;
    return rect1 + rect2 - overlapArea;
};

const getArea = (x1, y1, x2, y2) => (y2 - y1) * (x2 - x1);

const getOverlap = (a, b, c, d, e, f, g, h) => {
    const x1 = Math.max(a, e);
    const x2 = Math.min(c, g);
    const y1 = Math.max(b, f);
    const y2 = Math.min(d, h);
    
    if (y1 >= y2 || x1 >= x2) return null;
    return [x1, y1, x2, y2];
};
