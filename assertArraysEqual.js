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