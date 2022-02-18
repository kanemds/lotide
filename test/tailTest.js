// const assertEqual = require('../assertEqual');
// const assertEqual = require('../assertEqual');

const assert = require('chai').assert;


const tail = require('../tail.js');

// Note that for comparing arrays, Chai gives us assert.deepEqual.

// because assert.strictEqual simply uses === to compare values, which will not work for comparing objects and arrays.



describe("#tail", ()=> {
  it("return []", ()=> {
    assert.deepEqual(tail(["a"]), []);
  });
  it("return []", ()=> {
    assert.deepEqual(tail([]),[]);
  });
  it("return [Lighthouse, Labs]", ()=> {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]),["Lighthouse", "Labs"]);
  });
});
