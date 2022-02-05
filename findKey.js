

const findKey = (keys, callback) => {
  
  for (const key in keys) {
    if (callback(keys[key])) {
      console.log(keys[key]);
      return key;
      
    }
  }
  return undefined;
};


const key = findKey({
  "Blue Hill": { stars: 1 },
  "noma":      { stars: 2 },
  "Akaleri":   { stars: 3 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
},x => x.stars === 2); // => "noma"


const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑😂 Assertion Failed: ${actual} !== ${expected}`);
  }
  if (actual === expected) {
    console.log(`✅😁 Assertion Passed: ${actual} === ${expected}`);
  }
};

assertEqual(key,"noma");