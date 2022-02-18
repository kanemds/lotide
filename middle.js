const assertArraysEqual = require('./assertArraysEqual');


const middle = data => {
  
  let result = [];
 
  if (data.length < 3 || !Array.isArray(data)) {
    return [];
  }
  
  let nums = data.filter(data => Number(data));
  let item = nums.length;
  if (item % 2 === 0) {
    result.push(nums[item / 2 - 1]);
    result.push(nums[item / 2]);
  } else {
    result.push(nums[Math.floor(item / 2)]);
  }
  return result;
};

module.exports = middle;

console.log(middle([1,2]));
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);// => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3, 4, 5, 6,"a","c","4","1","4","3","q"]));

