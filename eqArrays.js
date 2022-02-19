// const assertEqual = require('./assertEqual');


const eqArrays = (firstSet,secondSet) => {

  if (firstSet.length !== secondSet.length) {
    return false;
  }
  for (let i = 0; i < firstSet.length; i++) {
    if (!Array.isArray(firstSet[i]) && !Array.isArray(secondSet[i])) {
      if (firstSet[i] !== secondSet[i]) {
        return false;
      }
    }
    //first or seond not array false
    else if (Array.isArray(firstSet[i]) && !Array.isArray(secondSet[i]) || !Array.isArray(firstSet[i]) && Array.isArray(secondSet[i])) {
      return false;

    //both array but not same false
    } else if (Array.isArray(firstSet[i]) && Array.isArray(secondSet[i])) {
      
      if (!eqArrays(firstSet[i] ,secondSet[i])) {
        return false;
      } else {
        continue;
      }
    }
  }
  return true;
};
console.log(eqArrays([1,2,3],[1,2,3])); //true
console.log(eqArrays([1,2],[2,3])); // false
console.log(eqArrays([1,2],1)); // false
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false
console.log(eqArrays([[[2], 3], [4]], [[2, 3], 4])); //false
console.log(eqArrays([[[2], 3], 4], [[[2], 3], 4])); //true

// module.exports = eqArrays;