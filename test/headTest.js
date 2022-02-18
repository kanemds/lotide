// const assertEqual = require('../assertEqual');


// Note that for comparing arrays, Chai gives us assert.deepEqual.

// because assert.strictEqual simply uses === to compare values, which will not work for comparing objects and arrays.



const assert = require('chai').assert;
const head = require('../head.js');

describe('#head', ()=> {
  it("return 1 for [1,2,3]", () => {
    assert.strictEqual(head([1,2,3]),1);
  });
  it("return '5' for  ['5']", ()=> {
    assert.strictEqual(head(['5']), '5');
  });
  it("return 5 for [5,6,7]", ()=> {
    assert.strictEqual(head([5,6,7]), 5);
  });
  it(`return "Hello" for ["Hello", "Lighthouse", "Labs"]`, ()=> {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});
