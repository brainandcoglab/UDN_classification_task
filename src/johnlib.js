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

// binary search implementation
function binary_search(arr, val, func) {
    let L = 0;
    let R = arr.length - 1;
    while (L <= R) {
        let m = Math.floor((L+R)/2); // middle element
        let cmp = func(val, arr[m]); // comparison function
        if (cmp > 0) {
            L = m + 1;
        } else if(cmp < 0) {
            R = m - 1;
        } else {
            return m;
        }
    }
    // Negative return types indicate insertion postion - 1
    return -L - 1;
}

// number comparison function for binary search
// useful also to give to js's Array.sort(fn)
function float_compare(f0,f1) {
    return f0 - f1;
}

export {
    arange,
    repeat,
    RECT_VERTICES,
    binary_search,
    float_compare
};