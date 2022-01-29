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

const head = (data) => {
  if (!data) {
    return undefined;
  }
  if (Array.isArray(data)) {
    return data[0];
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5,6,7]), 8);


