var assert = require('assert');
var Match = require('./match');

describe('Match', function() {
    it('should be initialized with two players', function() {
        var match = new Match({ 
            player1: 'Nadal', 
            player2: 'Federer'});

        assert.equal(0, match.player1Score());
        assert.equal(0, match.player2Score());
    });

    it('should be 15-0 if player 1 scores', function() {
        var match = new Match({
            player1: 'Nadal',
            player2: 'Federer'});

        match.player1Scores();
        assert.equal(15, match.player1Score());
        assert.equal(0, match.player2Score());
    });

    it('should score 40-40', function() {});

    it('should consider player 1 advantage', function() {});
});
