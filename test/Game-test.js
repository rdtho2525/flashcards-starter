const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
    let card1;
    let game;

    beforeEach(function() {
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        game = new Game();
    });
    
    it('should be a function', function() {
        expect(Game).to.be.a('function');
    });

    it('should start the game', function() {
        expect(game.start).to.be.a('function');
    });

    it('should be able to create cards', function() {
        game.start();
        expect(game.newDeck.cards[0]).to.be.instanceOf(Card)
    });

    it('should be able to put cards in a deck', function() {
        game.start();
        expect(game.newDeck.cards).to.deep.include(card1)
    });

    it('should be able to create a new round using the current deck', function() {
        game.start();
        expect(game.currentRound).to.be.instanceOf(Round);
        expect(game.newDeck).to.be.instanceOf(Deck);
    });
});