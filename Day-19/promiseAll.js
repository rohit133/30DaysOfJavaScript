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
