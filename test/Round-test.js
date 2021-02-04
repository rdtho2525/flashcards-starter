const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
    let card1;
    let card2;
    let card3;
    let deck;
    let round;

    beforeEach(function() {
        card1 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        card2 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method");
        card3 = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()");
        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
    });

    it('should be a function', function() {
        expect(Round).to.be.a('function');
        expect(round).to.be.an.instanceOf(Round);
    });

    it('should be able to hold a deck', function() {
        expect(round.deck).to.equal(deck.cards);
    });

    it('should start out with zero turns', function() {
        expect(round.turns).to.equal(0);
    });

    it('should start out with zero incorrect guesses', function() {
        expect(round.incorrectGuesses.length).to.equal(0);
    })

    it('should return the first card in the deck', function() {
        expect(round.returnCurrentCard).to.be.a('function');
        expect(round.returnCurrentCard()).to.equal(card1);
    });

    it('should allow a player to take a turn guessing the answer', function() {
        expect(round.takeTurn('array')).to.equal('correct!');
    });

    it('taking a turn should increment the turns property', function() {
        round.takeTurn('array');
        round.takeTurn('sort()');
        expect(round.turns).to.equal(2);
    });

    it('should store the id of cards that were guessed incorrectly', function() {
        round.takeTurn('object');
        expect(round.incorrectGuesses[0]).to.equal(2);
    });

    it('should be able to calculate the percentage of correct answers', function() {
        round.takeTurn('array');
        round.takeTurn('accessor method');
        round.takeTurn('map()');
        expect(round.calculatePercentCorrect()).to.equal(67);
    });
});