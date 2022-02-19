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

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      console.log(itemsToCount[item]);
      if (results[item]) {
        
        results[item] += 1;
      } else {
        
        results[item] = 1;
      }
    }
  }
  console.log(results);
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;