const assertEqual = require('./assertEqual');


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

module.exports = head;
