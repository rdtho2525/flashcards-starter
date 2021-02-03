const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
        this.deck = deck.currentDeck;
        this.turns = 0;
        this.incorrectGuesses = [];
    }

    returnCurrentCard() {
        return this.deck.shift();
    }

    takeTurn(guess) {
        this.turns++
        const currentCard = this.returnCurrentCard();
        const turn = new Turn(guess, currentCard);
        const feedback = turn.giveFeedback();
        feedback === 'incorrect!' ? this.incorrectGuesses.push(currentCard.id) : null;
        return feedback
    }
}

module.exports = Round;