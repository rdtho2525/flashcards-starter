const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.newDeck = new Deck([]);
    this.currentRound = null;
  }

  createCards() {
    prototypeQuestions.forEach(ele => {
      const newCard = new Card(ele.id, ele.question, ele.answers, ele.correctAnswer);
      this.newDeck.cards.push(newCard);
    });
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    this.createCards();
    this.currentRound = new Round(this.newDeck);
    console.log(this.newDeck.length)
    this.printMessage(this.newDeck, this.currentRound);
    this.printQuestion(this.currentRound);
  }
}

module.exports = Game;