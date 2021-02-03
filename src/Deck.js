const data = require('./data');
const prototypeQuestions = data.prototypeData;

class Deck {
    constructor(currentDeck) {
        this.currentDeck = currentDeck || prototypeQuestions;
    }

    countCards() {
        return this.currentDeck.length
    }
}

module.exports = Deck;