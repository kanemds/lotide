const assertEqual = require('../assertEqual');
const tail = require('../tail.js');
const letter = ["a"];
const empty = [];
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
// no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log(tail(words));
console.log(tail(letter));
console.log(tail(empty));