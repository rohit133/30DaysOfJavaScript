/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  for (let i = 0; i < arr.length; ++i) {
    arr[i] = fn(arr[i], i);
  }
  return arr;
};


var map = function (arr, fn) {
    let transformedArray = [];
    arr.forEach((element, index) => {
        transformedArray[index] = fn(element, index);
    });
    return transformedArray
  };
  


arr = [1, 2, 3];
fn = function plusone(n) {
  return n + 1;
};


console.log(map(arr, fn));
