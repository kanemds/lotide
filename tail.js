const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑😂 Assertion Failed: ${actual} !== ${expected}`);
  }
  if (actual === expected) {
    console.log(`✅😁 Assertion Passed: ${actual} === ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("aaa", "bbb");
assertEqual(1, "2");
assertEqual("A","A");

// let tail = (keys) => {
//   if (keys.length <= 1) {
//     return [];
//   }
//   return keys.slice(1);
// };

let tail = (data) => {
  let value = [];
  for (let i = 0; i < data.length; i++) {
    if (i >= 1) {
      value.push(data[i]);
    }
  }
  return value;
};

const letter = ["a"];
const empty = [];
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log(tail(words));
console.log(tail(letter));
console.log(tail(empty));



