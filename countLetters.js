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


const countLetters = (datas) => {
  let result = {};
  for (const data of datas) {
    if (data === " ") {
      continue;
    }
    if (result[data]) {
      result[data] += 1;
    } else {
      result[data] = 1;
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));