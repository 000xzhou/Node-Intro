/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    this.chains = {};
    for (let i = 0; i < this.words.length; i++) {
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;
      if (!this.chains[word]) {
        this.chains[word] = [];
      }
      this.chains[word].push(nextWord);
    }
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    let keys = Object.keys(this.chains);
    let key = keys[Math.floor(Math.random() * keys.length)];
    let output = [key];
    while (output.length < numWords && key !== null) {
      let followers = this.chains[key];
      key = followers[Math.floor(Math.random() * followers.length)];
      if (key) {
        output.push(key);
      }
    }
    return output.join(" ");
  }
}
// let mm = new MarkovMachine("the cat in the hat");
// mm.makeText();

// mm.makeText((numWords = 50));

module.exports = {
  MarkovMachine,
};
