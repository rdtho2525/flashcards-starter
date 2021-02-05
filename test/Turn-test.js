const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
    let card;

    beforeEach(function() {
      card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  
    });
    
    it('should be a function', function() {
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceOf(Turn);
    });

    it('should store a guess', function() {
        const turn = new Turn('object')
        expect(turn.userGuess).to.equal('object');
    });

    it('should store the current card object', function() {
        const turn = new Turn('object', card);
        expect(turn.currentCard).to.be.an('object');
        expect(turn.currentCard).to.equal(card);
    });

    it('should return a guess', function() {
        const turn = new Turn('object', card);
        expect(turn.returnGuess).to.be.a('function');
        expect(turn.returnGuess()).to.equal('object');
    });
    
    it('should return the current card', function() {
        const turn = new Turn('object', card);
        expect(turn.returnCard).to.be.a('function');
        expect(turn.returnCard()).to.equal(card);
    });

    it('should return false if player guesses the incorrect answer', function() {
        const turn = new Turn('array', card);
        expect(turn.evaluateGuess).to.be.a('function');
        expect(turn.evaluateGuess()).to.equal(false);
    });

    it('should return false if player guesses the correct answer', function() {
        const turn = new Turn('object', card);
        expect(turn.evaluateGuess).to.be.a('function');
        expect(turn.evaluateGuess()).to.equal(true);
    });

    it('should give feedback if player is incorrect', function() {
        const turn = new Turn('array', card);
        expect(turn.giveFeedback).to.be.a('function');
        expect(turn.giveFeedback()).to.equal('incorrect!');
    });

    it('should give feedback if player is correct', function() {
        const turn = new Turn('object', card);
        expect(turn.giveFeedback).to.be.a('function');
        expect(turn.giveFeedback()).to.equal('correct!');
    });
});