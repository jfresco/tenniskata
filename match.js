'use strict';

var Match = (function () {
    var player1Name;
    var player2Name;
    var player1Score;
    var player2Score;
    
    function Match(options) {
        player1Name = options.player1;
        player2Name = options.player2;
        player1Score = 0;
        player2Score = 0;
    }

    Match.prototype.player1Score =
    function() {
        return player1Score;     
    };

    Match.prototype.player2Score =
    function() {
        return player2Score;
    };

    Match.prototype.player1Scores =
    function() {
        switch (player1Score) {
            case 0:
                player1Score = 15;
                break;
            
            default:
                
        }
    };

    return Match;
}());

exports = module.exports = Match;
