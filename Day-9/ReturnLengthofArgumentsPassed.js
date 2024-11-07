/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */

// Using the Rest parameters
var argumentsLength1 = function (...args) {
    let count = 0
    for (let i = 0; i < args.length; i++) {
        count += 1;
    }
    return count
};
console.log(argumentsLength1(1, 2, 3));


// Using Arguments object
var argumentsLength2 = function (...args) {
    return arguments.length
};
console.log(argumentsLength2(1, 2, 3));