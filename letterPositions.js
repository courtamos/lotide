const letterPositions = function(sentence) {
  const results = {}; // empty obj for results to be pushed to

  const sentenceTrim = sentence.replaceAll(' ', ''); // triming sentence to get rid of possible spaces

  for (let i = 0; i < sentenceTrim.length; i++) { // looping over sentence to access each character
    if (results[sentenceTrim[i]]) { // checks to see if results has the char already in it
      results[sentenceTrim[i]].push(i); // if the char is in the results, push the index
    } else {
      results[sentenceTrim[i]] = [i]; //if it char isn't in results, push the char in and add the index
    }
  }
  return results;
};

module.exports = letterPositions;