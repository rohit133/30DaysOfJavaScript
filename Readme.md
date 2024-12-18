# 30 Days of JavaScript 

<img src="https://assets.leetcode.com/static_assets/others/%E9%9D%99%E6%80%81%E5%9B%BE.png" width="90" height="100">


### Progress

<!-- Progress bar -->
![Progress](https://us-central1-progress-markdown.cloudfunctions.net/progress/96)

You can track my progress here as I work through 30 Days of JavaScript.

Completed tasks: `28/30`






This project explores fundamental and intermediate JavaScript concepts through a series of challenges. Each challenge is designed to help understand core JavaScript topics, such as closures, functions, promises, array transformations, and more.

## Table of Contents

1. [Create Hello World Function](#1-create-hello-world-function)
2. [Counter](#2-counter)
3. [To Be Or Not To Be](#3-to-be-or-not-to-be)
4. [Counter II](#4-counter-ii)

5. [Apply Transform Over Each Element in Array](#5-basic-array-transformations)
6. [Filter Elements from Array](#6-filter-elements-from-array)
7. [Array Reduce Transformation](#7-array-reduce-transformation)

8. [Function Composition](#8-function-transformations)
9. [Return Length of Arguments Passed](#9-return-length-of-arguments-passed)
10. [Allow One Function Call](#10-allow-one-function-call)
11. [Memoize](#11-memoize)

12. [Add Two Promises](#12-promises-and-time)
13. [Sleep](#13-sleep)
14. [Timeout Cancellation](#14-timeout-cancellation)
15. [Interval Cancellation](#15-interval-cancellation)
16. [Promise Time Limit](#16-promise-time-limit)
17. [Cache With Time Limit](#17-cache-with-time-limit)
17. [Debounce](#18-debounce)
19. [Execute Asynchronous Functions in Parallel](#19-execute-asynchronous-functions-in-parallel)

20. [Is Object Empty](#20-json-is-object-empty)
21. [Chunk Array](#21-chunk-array)
22. [Array Prototype Last](#22-array-prototype-last)
23. [Group By](#23-group-by)
24. [Sort By](#24-sort-by)
25. [Join Two Arrays by ID](#25-join-two-arrays-by-id)
26. [Flatten Deeply Nested Array](#26-flatten-deeply-nested-array)
27. [Compact Object](#27-compact-object)

28. [Event Emitter](#28-event-emitter)
29. [Array Wrapper](#29-array-wrapper)
30. [Calculator with Method Chaining](#30-calculator-with-method-chaining)

---



## 1. Create Hello World Function
**Problem**: Create a simple function that returns the string "Hello World".

```JavaScript
/**
 * @return {Function}
 */
var createHelloWorld = function () {
    return function (...args) {
        return "Hello World"
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
```



## 2. Counter

**Problem**: Implement a simple counter function that increments with each call.

```JavaScript
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = 0
    let res = 0
    return function() {
        res = count+n;
        count++;
        return res;
    };
};


const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12

```



## 3. To Be Or Not To Be

**Problem**: A function should return `true` if the argument is truthy and `false` if the argument is falsy.

```JavaScript
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

```



## 4. Counter II

**Problem**: Create a counter function that supports incrementing, decrementing, and resetting the counter.

```JavaScript
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


```



## 5. Basic Array Transformations

**Problem**: Apply a transformation function to each element of an array.

1. Using For Loop 
```JavaScript 
var map = function (arr, fn) {
  for (let i = 0; i < arr.length; ++i) {
    arr[i] = fn(arr[i], i);
  }
  return arr;
};

```

2. Using forEach
```JavaScript 
var map = function (arr, fn) {
    let transformedArray = [];
    arr.forEach((element, index) => {
        transformedArray[index] = fn(element, index);
    });
    return transformedArray
  };

```



## 6. Filter Elements from Array

**Problem**: Filter elements from an array based on a condition.

```JavaScript
var filter = function(arr, fn) {
    let resultArray = []
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i], i)){
            resultArray.push(arr[i]);
        }
    }
    return resultArray
};

```


## 7. Array Reduce Transformation

**Problem**: Transform an array using `reduce()`.
```JavaScript
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let val=init;
  for (let i=0; i<nums.length; i++) {
    val=fn(val, nums[i]);
  }
  return val;
};


```



## 8. Function Transformations

**Problem**: Create a function composition that pipes multiple functions together.

```JavaScript

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
    if (functions.length === 0) {
        return function (x) { return x; };
    }
    return functions.reduceRight(function (prevFn, nextFn) {
        return function (x) {
            return nextFn(prevFn(x));
        };
    });
};


const fn = compose([x => x + 1, x => 2 * x])
fn(4) // 9


```

```TypeScript

type F = (x: number) => number;

function compose(functions: F[]): F {
    if (functions.length === 0) {
        return (x: any) => x;
    }
    return functions.reduceRight((prevFn, nextFn) => {
        return (x: any) => {
            return nextFn(prevFn(x));
        };
    });
};


const fn = compose([x => x + 1, x => 2 * x])
 fn(4) // 9

```


## 9. Return Length of Arguments Passed

**Problem**: Return the number of arguments passed to a function.

#### Solution 1 using Rest parameters

```JavaScript 
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
    let count = 0
    for (let i = 0; i < args.length; i++) {
        count += 1;
    }
    return count
};
```

#### Solution 2 using Arguments object

```JavaScript 
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
    return arguments.length
};
```

## 10. Allow One Function Call

**Problem**: Allow a function to be called only once.

```JavaScript 
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
```

```JavaScript 
/**
 * @param {Function} fn
 * @return {Function}
 */


// Solution 2

var once = function (fn) {
    let isExecuted = false;
    return (...args) => (isExecuted ? undefined : ((isExecuted = true), fn(...args)))
}
```

## 11. Memoize

**Problem**: Implement memoization to cache the results of function calls.

```JavaScript
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if(key in cache){
            return(cache[key])
        } else {
            let ans = fn.apply(this, args);
            cache[key] = ans;
            return
        }
    }
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */

```



## 12. Promises and Time

**Problem**: Add two promises.

```JavaScript 
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    return (await promise1 + await promise2);
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
```


## 13. Sleep

**Problem**: Implement a sleep function that pauses execution for a given number of milliseconds.


#### Solution - 1  
```JavaScript 
/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, millis);
  });
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
```

#### Solution - 2 
```JavaScript 
/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  await new Promise(resolve => {
    setTimeout(resolve, millis)
  });
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
```




## 14. Timeout Cancellation

**Problem**: Cancel a timeout before it executes.

```JavaScript
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
    const cancelFn = () => {
        clearTimeout(functionTimeID);
    }
    const functionTimeID = setTimeout(() => {
        fn(...args);
    }, t)
    return cancelFn;
};

const result = [];
const fn = (x) => x * 5;
const args = [2],
  t = 20,
  cancelTimeMs = 50;
const start = performance.now();

const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

const cancel = cancellable(log, args, t);
const maxT = Math.max(t, cancelTimeMs);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
  console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15);

```


## 15. Interval Cancellation

**Problem**: Cancel an interval before it executes repeatedly.

```JavaScript
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */


var cancellable = function(fn, args, t) {
    fn(...args);
    let functionTimeID = setInterval(() => fn(...args), t);
    let cancelFn = () => clearInterval(functionTimeID);
    return cancelFn;
};


const result = [];
const fn = (x) => x * 2;
const args = [4], t = 35, cancelTimeMs = 190;
const start = performance.now();
const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({"time": diff, "returned": fn(...argsArr)});
}
const cancel = cancellable(log, args, t);
setTimeout(cancel, cancelTimeMs);
 
setTimeout(() => {
    console.log(result); 
    // [
    //     {"time":0,"returned":8},
    //     {"time":35,"returned":8},
    //     {"time":70,"returned":8},
    //     {"time":105,"returned":8},
    //     {"time":140,"returned":8},
    //     {"time":175,"returned":8}
    // ]
}, cancelTimeMs + t + 15)    


```



## 16. Promise Time Limit

**Problem**: Limit the time a promise takes to resolve.

```JavaScript
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        const originalFnPromise = fn(...args);
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject("Time Limit Exceeded")
            }, t);
        })        
        return Promise.race([originalFnPromise, timeoutPromise]);
    }
};

const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms

```



## 17. Cache With Time Limit

**Problem**: Implement a caching function with an expiry time for cached values.

```JavaScript
var TimeLimitedCache = function () {
    this.cache = new Map();

};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    let found = this.cache.has(key);
    if (found) clearTimeout.has(this.cache.get(key).ref);
    this.cache.set(key, {
        value,
        ref: setTimeout(() => this.cache.delete(key), duration)
    })
    return found;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return this.cache.size;
};

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count());  // 1

```


## 18. Debounce

**Problem**: Implement a debouncing function to limit how frequently a function can be invoked.

```JavaScript
/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timer;
    return function(...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {fn.apply(this, args);}, t);
    };
};


const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms

```


## 19. Execute Asynchronous Functions in Parallel

**Problem**: Run asynchronous functions in parallel and wait for all to complete.


```JavaScript

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const results = new Array(functions.length);
    let count = 0;
    functions.forEach((fn, i) => {
      fn()
        .then((val) => {
          results[i] = val;
          count++;
          if (count === functions.length) resolve(results);
        })
        .catch((reason) => reject(reason));
    });
  });
};

const promise1 = promiseAll([() => new Promise((res) => res(42))]);

promise1.then(console.log); // [42]

const promise2 = promiseAll([
  () => new Promise((resolve) => setTimeout(() => resolve(1), 200)),
  () =>
    new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100)),
]);

promise2.then(console.log); // {"t":100,"rejected":"Error"}

const promise3 = promiseAll([
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
]);

promise3.then(console.log); // {"t":150,"resolved":[4,10,16]}


```



## 20. JSON: Is Object Empty

**Problem**: Check if a JSON object is empty.

```JavaScript
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
```



## 21. Chunk Array

**Problem**: Split an array into chunks of a given size.

```JavaScript

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const result = [];
    for(let i=0; i<arr.length; i+=size){
        result.push(arr.slice(i,i+size));
    }
    return result;
};


```


## 22. Array Prototype Last

**Problem**: Add a method to the array prototype that returns the last element.

```JavaScript
/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() { 
    return this.length === 0 ? -1 : this[this.length - 1]
};

const arr = [];
console.log(arr.last());

```


## 23. Group By

**Problem**: Group elements of an array by a specific criterion.

```JavaScript
/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    const obj = {};
    for (let e of this) {
        const key = fn((e))
        obj[key] ||= [];
        obj[key].push(e);
    }
    return obj;
};
[1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}

```


## 24. Sort By

**Problem**: Sort an array of objects by a specific property.

```JavaScript
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};

```


## 25. Join Two Arrays by ID

**Problem**: Join two arrays by a common key (ID).

```JavaScript
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

```


## 26. Flatten Deeply Nested Array

**Problem**: Flatten an array with arbitrary depth.

```JavaScript
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

```


## 27. Compact Object

**Problem**: Remove `null`, `undefined`, or empty values from an object.

```JavaScript
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



```



## 28. Event Emitter

**Problem**: Create an event emitter class that supports subscribing, emitting, and unsubscribing events.

```JavaScript
class EventEmitter {

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    constructor() {
        this.eventName = new Map();
    }

    subscribe(eventName, callback) {
        if (!this.eventName.has(eventName)) {
            this.eventName.set(eventName, []);
        }
        const listeners = this.eventName.get(eventName);
        listeners.push(callback);
        return {
            unsubscribe: () => {
                const index = listeners.indexOf(callback);
                if (index !== -1) {
                    listeners.splice(index, 1);
                }
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.eventName.has(eventName)) {
            return [];
        }

        const listeners = this.eventName.get(eventName);
        const results = [];

        for (const listener of listeners) {
            results.push(listener(...args));
        }

        return results;
    }
}


/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

```



## 29. Array Wrapper

**Problem**: Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:
- When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
- When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

## 30. Calculator with Method Chaining

**Problem**: Create a calculator class with method chaining for arithmetic operations.

---

### Conclusion

The "30 Days of JavaScript" project covers essential topics through simple to medium complexity problems. These problems aim to strengthen foundational concepts while applying JavaScript features like closures, array transformations, promises, and object manipulation in practical scenarios.