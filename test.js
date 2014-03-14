var assert = require('assert');
var Match = require('./match');

describe('Match', function() {
    it('should be initialized with two players', function() {
        var match = new Match({ 
            player1: 'Nadal', 
            player2: 'Federer'});

        assert.equal('Love', match.player1Score());
        assert.equal('Love', match.player2Score());
    });

    it('should be 15-0 if player 1 scores', function() {
        var match = new Match({
            player1: 'Nadal',
            player2: 'Federer'});

        match.player1Scores();
        assert.equal('Fifteen', match.player1Score());
        assert.equal('Love', match.player2Score());
    });

    it('should score 40-40', function() {
        var match = new Match({
            player1: 'Nadal',
            player2: 'Federer'});

        match.player1Scores(); // 15-0
        match.player1Scores(); // 30-0
        match.player1Scores(); // 40-0

        match.player2Scores(); // 40-15
        match.player2Scores(); // 40-30
        match.player2Scores(); // 40-40

        assert.equal('Forty', match.player1Score());
        assert.equal('Forty', match.player2Score());
    });

    it('should consider player 1 advantage', function() {
        var match = new Match({
            player1: 'Nadal',
            player2: 'Federer'});

        match.player1Scores(); // 15-0
        match.player1Scores(); // 30-0
        match.player1Scores(); // 40-0

        match.player2Scores(); // 40-15
        match.player2Scores(); // 40-30
        match.player2Scores(); // 40-40

        match.player1Scores(); // Ad p1
        
        assert.equal('Advantage', match.player1Score());
    });
});
