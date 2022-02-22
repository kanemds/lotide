const eqArrays = require('./eqArrays');

const eqObjects = (object1, object2) => {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  if (key1.length !== key2.length) {
    return false;
  }
  for (const key of key1) {
    if (key2.indexOf(key) < 0) {
      return false;
    }
    console.log(key, isNaN(object1[key]));
    if (!isNaN(object1[key]) && !isNaN(object2[key])) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    } else if (typeof object1[key] === "string" && typeof object2[key] === "string") {
      if (object1[key] !== object2[key]) {
        return false;
      }
    } else if (Array.isArray(object1[key])) {
      console.log(object1[key]);
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (typeof object1[key] === "object" && object1[key] !== null && typeof object2[key] === "object" && object2[key] !== null) {
      if (!eqObjects(object1[key], object2[key])) {
        console.log(object1[key], object2[key]);
        return false;
      }
    } else {
      continue;
    }
  }
  return true;
};


// console.log(eqObjects({ a: { z: 1 }, b: 2, c: 3}, { a: { z: 1 }, b: 2, c:3 })); // => true
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2,c:1 }, { a: { z: 1 }, b: 2 })); // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2,c:3 }, { a: 1, b: 2 })); // => false




// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

// const obj1 = { c: "1", d: ["2", 3] };

 
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

module.exports = eqObjects;