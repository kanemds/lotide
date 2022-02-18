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