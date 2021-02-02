const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
    
    it.skip('should be a function', function() {
        const turn = new Turn()
        expect(Turn).to.be.a('function');
    });

    it.skip('should be an instance of Turn', function() {
        const turn = new Turn();
        expect(Turn).to.be.an.instanceOf(Turn);
    });

    it.skip('should store a guess', function() {
        const turn = new Turn('pug')
        expect(turn.userGuess).to.equal('pug');
    });

    it.skip('should store the current card object', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('pug', card);
        expect(turn.currentCard).to.be.an('object');
        // expect(turn.currentCard).to.equal();
    });

    it.skip('should return a guess', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('pug', card);
        expect(turn.returnGuess).to.be.a('function');
        expect(turn.returnGuess).to.equal('pug');
    });
    
    it.skip('should return the current card', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('pug', card);
        expect(turn.returnCard).to.be.a('function');
        expect(turn.returnCard).to.deep.equal(['object']);
    });

    it.skip('should compare the player\'s guess against the correct answer', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('pug', card);
        expect(turn.evaluateGuess).to.be.a('function');
        expect(turn.evaluateGuess).to.equal('false');
    });

    it.skip('should give feedback to player', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('pug', card);
        expect(turn.giveFeedback).to.be.a('function');
        expect(turn.giveFeedback).to.equal('incorrect!');
    })
})