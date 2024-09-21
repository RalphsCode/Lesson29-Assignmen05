/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    console.log("### this.words:", this.words)
    this.makeChains(this.words);
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains(text) {
    // Argument: [ 'the', 'cat', 'in', 'the', 'hat' ]
    console.log("### text argument:", text);
    let wordDict = {};
    
    for (let i=0; i<text.length; i++) {
      let word = text[i];
      let nextWord = text[i+1];
      if (nextWord == undefined) {
        nextWord = null;
      }
      if (wordDict[word]) {
        wordDict[word].push(nextWord);
      } else {
        wordDict[word] = [nextWord];
      }
      console.log("### wordDict:", wordDict);
      }
      return wordDict;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}

words = new MarkovMachine("the cat in the hat is in the hat");



