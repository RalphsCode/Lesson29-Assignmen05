const { MarkovMachine } = require("./markov");

describe("Test MarkovMachine", () => {

    test('words should return an object', function () {
      expect(typeof words).toBe('object');
    });

    test('words should return a wordDict', function () {
            // Check if wordDict is defined
            expect(words.wordDict).toBeDefined();

           });

    test('wordDict should be an Object', function () {

        // Check if wordDict is an object
        expect(typeof words.wordDict).toBe('object');
        });

});   // END describe