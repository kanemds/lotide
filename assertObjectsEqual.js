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

const eqObjects = (object1, object2) => {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  if (key1.length !== key2.length) {
    return false;
  }
  for (const key of key1) {
    // console.log(key,eqArrays(object1[key], object2[key]));
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected) === false) {
    console.log(`🛑🤣🤣 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`✅😉😉 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

module.exports = assertObjectsEqual;