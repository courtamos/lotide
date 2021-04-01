// assertEqual Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// scan the object and return the first key for which the callback returns a truthy value
// if no truthy value found, should return undefined

// findKey Function
const findKey = function(object, callback) {
  // var to hold keys of object
  const keys = Object.keys(object);

  // loop over keys
  for (const key of keys) {
    // if truthy value found, return key
    if (callback(object[key])) {
      return key;
    }
  }
  // if no truthy value found, return undef.
  return undefined;
};


// test case #1
const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(result1, "noma");

// test case #2
const result2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1); // => "blue hill"

assertEqual(result2, "Blue Hill");

// test case #3
const result3 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 5); // => "undefined"

assertEqual(result3, undefined);