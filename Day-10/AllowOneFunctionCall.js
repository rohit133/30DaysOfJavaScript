/**
 * @param {Function} fn
 * @return {Function}
 */


// Solution 1

var once = function (fn) {
    let count = 0
    return function (...args) {
        if (count === 0) {
            count = 1
            return fn(...args)
        } else {
            return undefined;
        }
    }
};

// Solution 2

var once = function (fn) {
    let isExecuted = false;
    return (...args) => (isExecuted ? undefined : ((isExecuted = true), fn(...args)))
}


let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)

onceFn(1,2,3); // 6
onceFn(2,3,6); // returns undefined without calling fn
