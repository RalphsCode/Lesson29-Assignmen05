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
    let word_dict = {};
    
    for (let i=0; i<text.length; i++) {
      let word = text[i];
      let next_word = text[i+1];
      if (next_word == undefined) {
        next_word = null;
      }
      if (word_dict[word]) {
        word_dict[word].push(next_word);
      } else {
        word_dict[word] = [next_word];
      }
      console.log("### word_dict:", word_dict);
      }
      return word_dict;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}

words = new MarkovMachine("the cat in the hat is in the hat");



