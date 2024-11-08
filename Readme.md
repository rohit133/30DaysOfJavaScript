# 30 Days of JavaScript 

<img src="https://assets.leetcode.com/static_assets/others/%E9%9D%99%E6%80%81%E5%9B%BE.png" width="90" height="100">


### Progress

<!-- Progress bar -->
![Progress](https://us-central1-progress-markdown.cloudfunctions.net/progress/28)

You can track my progress here as I work through 30 Days of JavaScript.

Completed tasks: `10/30`






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




## 12. Promises and Time

**Problem**: Add two promises.




## 13. Sleep

**Problem**: Implement a sleep function that pauses execution for a given number of milliseconds.





## 14. Timeout Cancellation

**Problem**: Cancel a timeout before it executes.




## 15. Interval Cancellation

**Problem**: Cancel an interval before it executes repeatedly.




## 16. Promise Time Limit

**Problem**: Limit the time a promise takes to resolve.




## 17. Cache With Time Limit

**Problem**: Implement a caching function with an expiry time for cached values.




## 18. Debounce

**Problem**: Implement a debouncing function to limit how frequently a function can be invoked.




## 19. Execute Asynchronous Functions in Parallel

**Problem**: Run asynchronous functions in parallel and wait for all to complete.




## 20. JSON: Is Object Empty

**Problem**: Check if a JSON object is empty.




## 21. Chunk Array

**Problem**: Split an array into chunks of a given size.




## 22. Array Prototype Last

**Problem**: Add a method to the array prototype that returns the last element.




## 23. Group By

**Problem**: Group elements of an array by a specific criterion.




## 24. Sort By

**Problem**: Sort an array of objects by a specific property.




## 25. Join Two Arrays by ID

**Problem**: Join two arrays by a common key (ID).




## 26. Flatten Deeply Nested Array

**Problem**: Flatten an array with arbitrary depth.




## 27. Compact Object

**Problem**: Remove `null`, `undefined`, or empty values from an object.




## 28. Event Emitter

**Problem**: Create an event emitter class that supports subscribing, emitting, and unsubscribing events.




## 29. Array Wrapper

**Problem**: Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:
- When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
- When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

## 30. Calculator with Method Chaining

**Problem**: Create a calculator class with method chaining for arithmetic operations.

---

### Conclusion

The "30 Days of JavaScript" project covers essential topics through simple to medium complexity problems. These problems aim to strengthen foundational concepts while applying JavaScript features like closures, array transformations, promises, and object manipulation in practical scenarios.