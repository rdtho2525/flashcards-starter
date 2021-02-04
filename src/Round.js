const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
        this.deck = deck.cards;
        this.turns = 0;
        this.incorrectGuesses = [];
    }

    returnCurrentCard() {
        return this.deck[0];
    }

    takeTurn(guess) {
        this.turns++;
        const currentCard = this.returnCurrentCard();
        const turn = new Turn(guess, currentCard);
        const feedback = turn.giveFeedback();
        feedback === 'incorrect!' ? this.incorrectGuesses.push(currentCard.id) : null;
        this.deck.shift();
        return feedback
    }

    calculatePercentCorrect() {
        const correctAnswers = this.turns - this.incorrectGuesses.length;
        const percentCorrect = Math.round((correctAnswers / this.turns) * 100);
        return percentCorrect
    }

    endRound() {
        console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    }
}

module.exports = Round;