/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    return {
        toBe: (checkVal) => {
            if (val !== checkVal) {
                throw new Error("Not Equal");
            } else {
                return true
            }
        },
        notToBe: (checkVal) => {
            if (checkVal === val) {
                throw new Error("Equal");
            } else {
                return true
            }
        }
    }
};



console.log(expect(5).toBe(5));
console.log( expect(5).notToBe(5));
console.log( expect(5).notToBe(null));

