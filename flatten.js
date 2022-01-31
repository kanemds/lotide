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

const assertArraysEqual = (a,b) => {
  if (eqArrays(a,b) === false) {
    console.log("🤣🤣 sadly, not equal!");
  } else {
    console.log("😉😉 It's equal!");
  }
};
assertArraysEqual([1,2,3,3,4,5],["1","2",4,5]);
assertArraysEqual([1,2,3,],[1,2,3]);
assertArraysEqual([1,2,3,],[1,2,"3"]);

const flatten = (data) => {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (Array.isArray(data[i])) {
      result = result.concat(data[i]);
    } else {
      result.push(data[i]);
    }
  }
  return result;
};

console.log(flatten([1, "2", ["v", 4], 5, [6]]));
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]

const array = [ 'this', 'is', 'an', 'array' ];
console.log(typeof array); //object