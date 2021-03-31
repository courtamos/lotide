// assertEqual Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// loop the object and return first key that contains the value
// if no key matches the given value, return undefined

// findKeyByValue Function
const findKeyByValue = function(object, value) {
  const keys = Object.keys(object); // finds all the keys in object['sci_fi', 'comedy', 'drama]

  for (const key of keys) { // loop object keys
    if (object[key] === value) { // on iteration if key is equal to the value return key
      return key;
    }
  }
  return undefined; // if no matches in loop, return undefined
};

// test cases
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Friends"), undefined);