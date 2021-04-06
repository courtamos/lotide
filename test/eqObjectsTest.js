const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true when given ab and ba", () => {
    assert.equal(eqObjects(ab, ba), true);
  });

  it("returns true when given cd and dc", () => {
    assert.equal(eqObjects(cd, dc), true);
  });

  it("returns false when given ab and abc", () => {
    assert.equal(eqObjects(ab, abc), false);
  });

  it("returns false when given cd and cd2", () => {
    assert.equal(eqObjects(cd, cd2), false);
  });
});


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };