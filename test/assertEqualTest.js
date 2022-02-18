// TEST CODE
const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("aaa", "bbb");
assertEqual(1, "2");
assertEqual("A","A");


const head = require('../head.js');
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5,6,7]), 8);

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
