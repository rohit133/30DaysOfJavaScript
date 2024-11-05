var reduce = function (nums, fn, init) {
  let val=init;
  for (let i=0; i<nums.length; i++) {
    val=fn(val, nums[i]);
  }
  return val;
};


let result1 = reduce(
    [1, 2, 3, 4],
    function sum(accum, curr) {
      return accum + curr;
    },
    0
  );
  console.log(result1);


let result2 = reduce(
  [1, 2, 3, 4],
  function sum(accum, curr) {
    return accum + curr * curr;
  },
  100
);
console.log(result2);


let result3 = reduce(
    [1, 2, 3, 4],
    function sum(accum, curr) {
      return 0;
    },
    25
  );
  console.log(result3);
  