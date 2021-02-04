const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
    
    it('should be a function', function() {
        const game = new Game();
        expect(Game).to.be.a('function');
    });

    it('should start the game', function() {
        const game = new Game();
        expect(game.start).to.be.a('function');
    });

    it('should be able to create cards', function() {
        const game = new Game();
        game.start();
        expect(game.newDeck.cards[0]).to.be.instanceOf(Card)
    });

    it('should be able to put cards in a deck', function() {
        const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const game = new Game();
        game.start();
        expect(game.newDeck.cards).to.deep.include(card1)
    });

    it('should be able to create a new round using the current deck', function() {
        const game = new Game();
        game.start();
        expect(game.currentRound).to.be.instanceOf(Round);
        expect(game.newDeck).to.be.instanceOf(Deck);
    });
});