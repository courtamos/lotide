const assertEqual = require('../assertEqual');

assertEqual(1, 1); // passes
assertEqual(1, 3); // fails
assertEqual(5, 5); // passes