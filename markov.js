/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    this.wordDict = {};
    this.previousWord = "";
    this.newSentance = [];
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains(this.words);
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains(text) {
    /* Make a dictionary of the word chains */
    
    for (let i=0; i<text.length; i++) {

      let word = text[i];
      let nextWord = text[i+1];
      // If at the end of the sentance
      if (nextWord == undefined) {
        nextWord = null;
      }
      
      if (this.wordDict[word]) {
        this.wordDict[word].push(nextWord);
      } else {
        this.wordDict[word] = [nextWord];
      }
      }
      console.log("wordDict:", this.wordDict);
      return this.wordDict;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // Get a random word from the wordDict
    const keys = Object.keys(this.wordDict);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];

    const firstWord = this.wordDict[randomKey][0];
    console.log("## firstWord:",firstWord);
    this.newSentance.push(firstWord);
    this.getNextWord(firstWord, numWords);
  }

  getNextWord(previousWord, numWords){
    // Get a random next word
    let count = 1;

    do {
      // Make a list of words available
      const wordsAvailable = this.wordDict[previousWord];
      // Create a random number to pick a word from the list
      const randomElement = Math.floor(Math.random() * wordsAvailable.length);
      const nextWord = this.wordDict[previousWord][randomElement];
      // Handle if the nextWord is null
      if (nextWord !== null) {
        this.newSentance.push(nextWord);
        previousWord = nextWord;
        console.log(this.newSentance);
        count++;
      } // END if
    } while (
      count < numWords
  );
  return this.newSentance;
  }  // END getNextWord()

}  // END MarkovMachine

words = new MarkovMachine("the cat in the hat is in the hat and sat on the flat cat");
words.makeText(15);



