const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.newDeck = null;
    this.currentRound = null;
  }

  createCards() {
    const newCards = prototypeQuestions.map(ele => {
      const instance = new Card(ele.id, ele.question, ele.answers, ele.correctAnswer);
      return instance
    });
    return newCards
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
    this.newDeck = new Deck(this.createCards())
    this.currentRound = new Round(this.newDeck);
    this.printMessage(this.newDeck, this.currentRound);
    this.printQuestion(this.currentRound);
  }
}

module.exports = Game;