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

    var translateScore = function(score) {
        switch (score) {
            case 0:
                return 'Love';
            case 1:
                return 'Fifteen';
            case 2:
                return 'Thirty';
            case 3:
                return 'Forty';
            case 4:
                return 'Advantage';
            default:
                throw new Error('Illegal score');    
        }
    };

    Match.prototype.player1Score =
    function() {
        return translateScore(player1Score);     
    };

    Match.prototype.player2Score =
    function() {
        return translateScore(player2Score);
    };

    Match.prototype.player1Scores =
    function() {
        switch (player1Score) {
            case 0:
            case 1:
            case 2:
                player1Score++;
                break;
            case 3:
               if (player2Score === 3) {
                   player1Score++;
               } else if (player2Score === 4) {
                   player2Score--;
               } else {
                   player1Score = player2Score = 0; 
               }
               break;
            case 4:
            default:
               throw new Error('Illegal score');
        }
    };

    Match.prototype.player2Scores =
    function() {
         switch (player2Score) {
            case 0:
            case 1:
            case 2:
                player2Score++;
                break;
            case 3:
               if (player1Score === 3) {
                   player2Score++;
               } else if (player1Score === 4) {
                   player1Score--;
               } else {
                   player2Score = player1Score = 0; 
               }
               break;
            case 4:
            default:
               throw new Error('Illegal score');
        }
    };

    return Match;
}());

exports = module.exports = Match;
