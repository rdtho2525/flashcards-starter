const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {
    //should be a function
    it.skip('should be a function', function() {
        const round = new Round();
        expect(Round).to.be.a('function');
    });

    //should hold a deck
    it.skip('should be able to hold a deck', function() {
        const deck = new Deck();
        const round = new Round(deck);
        expect(round.deck).to.deep.equal(deck);
    });

    //should start out with zero turns
    it.skip('should start out with zero turns', function() {
        const deck = new Deck();
        const round = new Round(deck);
        expect(round.turns).to.equal(0);
    });

    //should start out with zero incorrect guesses
    it.skip('should start out with zero incorrect guesses', function() {
        const deck = new Deck();
        const round = new Round(deck);
        expect(round.incorrectGuesses.length).to.equal(0);
    })

    //should return current card
    it.skip('should return the first card in the deck', function() {
        const deck = new Deck();
        const round = new Round(deck);
        expect(round.returnCurrentCard).to.be.a('function');
        expect(round.returnCurrentCard()).to.equal(/*card obj*/);
    });

    //should allow player to take a turn guessing the answer
    it.skip('should allow a player to take a turn guessing the answer', function() {
        const deck = new Deck();
        const round = new Round(deck);
        expect(round.takeTurn('object')).to.equal('correct!');
    });

    //taking a turn should increment the turns property
    it.skip('taking a turn should increment the turns property', function() {
        const deck = new Deck();
        const round = new Round(deck);
        round.takeTurn('object');
        round.takeTurn('pup');
        expect(round.turns).to.equal(2);
    });

    //should store the id of cards that were guessed incorrectly
    it.skip('should store the id of cards that were guessed incorrectly', function() {
        const deck = new Deck();
        const round = new Round(deck);
        round.takeTurn('pup');
        expect(round.incorrectGuesses[0]).to.equal(/*card id*/)
    });
});