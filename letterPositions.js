// eqArrys function
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

// assertArraysEqual Function
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`[${arr1}] and [${arr2}] are equal`);
  } else {
    console.log(`[${arr1}] and [${arr2}] are NOT equal`);
  }
};

// letterPosition Function
const letterPositions = function(sentence) {
  // empty obj for results to be pushed to
  const results = {};

  // triming sentence to get rid of possible spaces
  const sentenceTrim = sentence.replaceAll(' ', '');

  // looping over sentence to access each character
  for (let i = 0; i < sentenceTrim.length; i++) {
    if (results[sentenceTrim[i]]) { // checks to see if results has the char already in it
      results[sentenceTrim[i]].push(i); // if the char is in the results, push the index
    } else {
      results[sentenceTrim[i]] = [i]; //if it char isn't in results, push the char in and add the index
    }
  }
  console.log(results);
  return results;
};

// test cases
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("LHL").L, [0, 2]);