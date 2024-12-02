/**
* @param {Array} arr
* @param {number} depth
* @return {Array}
*/
var flat = function (arr, n) {
    let result = [];
    for (let item of arr) {
        if (Array.isArray(item) && n > 0) result.push(...flat(item, n - 1));
        else result.push(item);
    }
    return result;
}

arr = [1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]]
n = 0;

console.log(flat(arr, n));
