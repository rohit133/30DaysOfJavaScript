/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let value = init;
    return {
        increment: () => ++value,
        reset: () => value = init,  
        decrement: ()=> --value,
    }
};


const counter = createCounter(5)
console.log(counter.increment()); // 1
console.log(counter.decrement()); // 1
console.log(counter.increment()); // 1
console.log(counter.reset()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.reset()); // 0
console.log(counter.reset()); // 0
