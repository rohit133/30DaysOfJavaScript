/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let items = arr1.concat(arr2);
    let result = {};

    for(const obj of items){
        if(!result[obj.id]){
            result[obj.id] = obj;
            continue;
        }
        result[obj.id] = {...result[obj.id], ...obj};
    }
    return Object.values(result);

};
// Dry Run

let arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];

let arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];


console.log(join(arr1, arr2))



let Output = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];
