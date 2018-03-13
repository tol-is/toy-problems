/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
    if (isSquare(getLineProp(p1, p2), getLineProp(p3, p4))) return true;
    if (isSquare(getLineProp(p1, p3), getLineProp(p2, p4))) return true;
    return isSquare(getLineProp(p1, p4), getLineProp(p2, p3));
};

const isSquare = (line1, line2) => (
    line1[0] > 0 &&
    line1[0] === line2[0] &&
    arePerpendicular(line1[1], line2[1]) &&
    areSame(line1[2], line2[2])
);

const arePerpendicular = ([n1, d1], [n2, d2]) => (
    (n1 === 0 && d2 === 0) ||
    (n2 === 0 && d1 === 0) ||
    (n1 * n2) / (d1 * d2) === -1
);

const areSame = ([x1, y1], [x2, y2]) => x1 === x2 && y1 === y2;

const getLineProp = (p1, p2) => [getLen(p1, p2), getSlope(p1, p2), getMidPt(p1, p2)];

const getLen = ([x1, y1], [x2, y2]) => Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

const getSlope = ([x1, y1], [x2, y2]) => [(x1 - x2), (y1 - y2)];

const getMidPt = ([x1, y1], [x2, y2]) => [(x1 + x2) / 2, (y1 + y2) / 2];
