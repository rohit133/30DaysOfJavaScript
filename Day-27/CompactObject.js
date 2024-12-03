/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
   if(Object.is(obj, null)) return null;
   if(Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
   if(typeof obj != 'object') return obj;

   let compact = {};
   for (const key in obj){
    let value = compactObject(obj[key]);
    if(value) compact[key] = value;
   }
   return compact; 
};

let obj0 = [null, 0, false, 1]
let obj1 = {"a": null, "b": [false, 1]}
let obj2 = [null, 0, 5, [0], [false, 16]]

console.log(compactObject(obj2))

