const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑😂 Assertion Failed: ${actual} !== ${expected}`);
  }
  if (actual === expected) {
    console.log(`✅😁 Assertion Passed: ${actual} === ${expected}`);
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("aaa", "bbb");
// assertEqual(1, "2");
// assertEqual("A","A");



const eqArrays = (firstSet,secondSet) => {
  
  if (firstSet.length !== secondSet.length) {
    return false;
  }
  for (let i = 0; i < firstSet.length; i++) {
    if ((firstSet[i] !== secondSet[i])) {
      return false;
    }
  }
  return true;
};

// console.log(eqArrays([1, 2, 3], [1, 2, 3]));
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));


const middle = nums => {
  
  let result = [];
  // for (let i = 0; i < nums.length; i++) {
  if (nums.length < 3 || !Array.isArray(nums)) {
    return [];
  }
  if (nums.length % 2 === 0) {
    result.push(nums[nums.length / 2 - 1]);
    result.push(nums[nums.length / 2]);
  } else {
    result.push(nums[Math.floor(nums.length / 2)]);
  }
  return result;
};

result[0] =
console.log(middle([1,2]));
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4]));// => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3, 4, 5, 6,"a","c","4","1","4","3","q"]));
