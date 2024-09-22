/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    this.wordDict = {};         // word chains
    this.previousWord = "";
    this.newSentenceArr = [];   // stores the new word order
    let words = text.split(/[ \r\n,.;!?'"()\-]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains(this.words);
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains(text) {
    /* Make a dictionary to store the word chains */
    
    // Loop for every word in the passed in text
    for (let i=0; i<=text.length; i++) {
      // Get a word, and the next word after it
      let word = text[i];
      let nextWord = text[i+1];
      // If word is the last word in the provided text use null as the next word


      if (nextWord !== undefined) {
        
          // Add the words to the words chain dictionary

          // if the word is already a key in the dict, add the next word as a value
          if (this.wordDict[word]) {
            this.wordDict[word].push(nextWord);
          } else {
            // if the word is not already a key, add it and add the next word as a value
            this.wordDict[word] = [nextWord];
          }
      }  // END if...

      }  // END for... loop
      console.log(this.wordDict);
      return this.wordDict;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // Get a random word from the wordDict
    const keys = Object.keys(this.wordDict);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];
    // Set the first word
    const firstWord = this.wordDict[randomKey][0];
    // Add the firstWord to the new sentence array
    this.newSentenceArr.push(firstWord);
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
        this.newSentenceArr.push(nextWord);
        previousWord = nextWord;
        count++;
      } // END if
    } while (
      count < numWords
  );
  // Change list of words into a sentence
  const sentence = this.newSentenceArr.join(" ");
  console.log(sentence);
  return sentence;
  }  // END getNextWord()

}  // END MarkovMachine

words = new MarkovMachine("I am Daniel I am Sam Sam I am That Sam-I-am That Sam-I-am! I do not like That Sam-I-am. Do you like Green eggs and ham I do not like them, Sam-I-am. I do not like Green eggs and ham. Would you like them Here or there? I would not like them Here or there. I would not like them Anywhere. I do not like green eggs and ham");

words.makeText();