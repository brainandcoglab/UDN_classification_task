// Like np.arange
let arange = function(start, stop) {
    let arr = [];
    if (typeof stop === 'undefined') {
        stop = start;
        start = 0;
    }
    for (var i = start; i < stop; i++) {
        arr.push(i);
    }
    return arr;
}

let repeat = function(x, n) {
    let arr = [];
    for (var i = 0; i < n; i++) {
        arr.push(x);
    }
    return arr;
}

// Vertices for a rectangle (well, a square really)
const RECT_VERTICES = [[(- 0.5), 0.5], [0.5, 0.5], [0.5, (- 0.5)], [(- 0.5), (- 0.5)]];

export {arange, repeat, RECT_VERTICES};
