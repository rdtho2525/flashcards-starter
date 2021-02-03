const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
    it('should be a function', function() {
        const deck = new Deck();
        expect(Deck).to.be.a('function');
    });

    it('should hold a collection of cards', function() {
        const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        const deck = new Deck([card1, card2, card3]);
        console.log(deck.pile)
        expect(deck.pile).to.deep.equal([card1, card2, card3]);
    });

    it('should return current number of cards in the deck', function() {
        const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        const deck = new Deck([card1, card2, card3]);
        expect(deck.countCards).to.be.a('function');
        expect(deck.countCards()).to.equal(3);
    });
});