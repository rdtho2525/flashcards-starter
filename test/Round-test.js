const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {

    it('should be a function', function() {
        const deck = new Deck();
        const round = new Round(deck);
        expect(Round).to.be.a('function');
    });

    it('should be able to hold a deck', function() {
        const card1 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card2 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method");
        const card3 = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()");
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        expect(round.deck).to.equal(deck.currentDeck);
    });

    it('should start out with zero turns', function() {
        const deck = new Deck();
        const round = new Round(deck);
        expect(round.turns).to.equal(0);
    });

    it('should start out with zero incorrect guesses', function() {
        const deck = new Deck();
        const round = new Round(deck);
        expect(round.incorrectGuesses.length).to.equal(0);
    })

    it('should return the first card in the deck', function() {
        const card1 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card2 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method");
        const deck = new Deck([card1, card2]);
        const round = new Round(deck);
        expect(round.returnCurrentCard).to.be.a('function');
        expect(round.returnCurrentCard()).to.equal(card1);
    });

    it('should allow a player to take a turn guessing the answer', function() {
        const card1 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card2 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method");
        const card3 = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()");
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        expect(round.takeTurn('array')).to.equal('correct!');
    });

    it('taking a turn should increment the turns property', function() {
        const card1 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()");
        const deck = new Deck([card1, card3]);
        const round = new Round(deck);
        round.takeTurn('array');
        round.takeTurn('sort()');
        expect(round.turns).to.equal(2);
    });

    it('should store the id of cards that were guessed incorrectly', function() {
        const card3 = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()");
        const deck = new Deck([card3]);
        const round = new Round(deck);
        round.takeTurn('map()');
        expect(round.incorrectGuesses[0]).to.equal(6);
    });
});