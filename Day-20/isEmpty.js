/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    return Object.keys(obj).length === 0;
}

const obj1 = {"x": 5, "y": 42};
const obj2 = {}
console.log(isEmpty(obj1))