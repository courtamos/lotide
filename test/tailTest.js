const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const test = ["Yo Yo"];
tail(test);
assertEqual(test.length, 1);