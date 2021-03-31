const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// countLetters Function
const countLetters = function(sentence) {
  const letterCounts = {};
  const sentenceTrim = sentence.replaceAll(' ', '');

  for (let letter of sentenceTrim) {
    if (letterCounts[letter]) {
      letterCounts[letter]++;
    } else {
      letterCounts[letter] = 1;
    }
  }
  console.log(letterCounts);
  return letterCounts;
};

// test cases
assertEqual(countLetters('hello world'), { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1});
assertEqual(countLetters('LHL'), {L : 2, H: 1});