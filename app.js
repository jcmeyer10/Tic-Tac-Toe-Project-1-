'use strict';
//Begin Document Ready
$(document).ready(function() {


  var xWin = 0;
  var oWin = 0;
  var player1 = "X";
  var player2 = "O";
  var playerTurn = player1;
  var gamePiece = $('.gameboard').children();
  var winner = 0;
  var token = 0;
  var tie = 0;


// This switches player and stops a cell
//from being clicked more than once


$('.startbutton').on('click', function(){
    $(gamePiece).each(function(){
      if ($(this).text()!== ''){
        token += 1;
            }
      if (token >= 1){
        playGame();
        $(gamePiece).html('');
        $('.message').html("Let's Start a New Game!");
      };
  });
});

//This stops the game once a win has been recorded
var stopGame = function(){
  $('.box').off('click')
  }

//End of Document Ready


var playGame = function () {$(gamePiece).on('click', function(){
     if (playerTurn === player1){
     $(this).text("X");
      // whoWins();
      updateScoreboard();
      playerTurn = player2;
     } else {
       $(this).text("O");
       // whoWins();
       updateScoreboard();
       playerTurn = player1;
     }
  whoWins();
 });
}

// var fullBoard =  function(){
//     $(gamePiece).each(function(){
//       if ($(this).each()!== ''){
//         token += 1;
//       }
//     });
//     if (token === 9){
//       return "Cat's Game";
//     }
//     console.log("Cat's Game")
//   };

//This is to update the scoreboard
var updateScoreboard = function (){
  $('.x-score').html("X Score: " + xWin);
  $('.o-score').html("O Score: " + oWin);
  $('tie-score').html("Tie Score: " + tie)
  };

// Winner Message for X
var xWinnerMessage = function(){
  if (xWin === xWin){
    $('.message').html("X is the Winner!")
  }
};

//Winner message for O
var oWinnerMessage = function(){
  if (oWin === oWin){
    $('.message').html("O is the Winner!")
  }
}

//This is the logic that determines if there is a winner.
  var whoWins = function whoWins() {
    if (
       $(gamePiece[0]).text() ==="X" && $(gamePiece[1]).text() === "X" && $(gamePiece[2]).text() === "X" ||
       $(gamePiece[3]).text() ==="X" && $(gamePiece[4]).text() === "X" && $(gamePiece[5]).text() === "X" ||
       $(gamePiece[6]).text() ==="X" && $(gamePiece[7]).text() === "X" && $(gamePiece[8]).text() === "X" ||
       $(gamePiece[0]).text() ==="X" && $(gamePiece[4]).text() === "X" && $(gamePiece[8]).text() === "X" ||
       $(gamePiece[2]).text() ==="X" && $(gamePiece[4]).text() === "X" && $(gamePiece[6]).text() === "X" ||
       $(gamePiece[0]).text() ==="X" && $(gamePiece[3]).text() === "X" && $(gamePiece[6]).text() === "X" ||
       $(gamePiece[1]).text() ==="X" && $(gamePiece[4]).text() === "X" && $(gamePiece[7]).text() === "X" ||
       $(gamePiece[2]).text() ==="X" && $(gamePiece[5]).text() === "X" && $(gamePiece[8]).text() === "X"
       ) {
        stopGame();
        console.log(xWin)
        ++xWin;
        xWinnerMessage();
  } else if (
       $(gamePiece[0]).text() ==="O" && $(gamePiece[1]).text() === "O" && $(gamePiece[2]).text() === "O" ||
       $(gamePiece[3]).text() ==="O" && $(gamePiece[4]).text() === "O" && $(gamePiece[5]).text() === "O" ||
       $(gamePiece[6]).text() ==="O" && $(gamePiece[7]).text() === "O" && $(gamePiece[8]).text() === "O" ||
       $(gamePiece[0]).text() ==="O" && $(gamePiece[4]).text() === "O" && $(gamePiece[8]).text() === "O" ||
       $(gamePiece[2]).text() ==="O" && $(gamePiece[4]).text() === "O" && $(gamePiece[6]).text() === "O" ||
       $(gamePiece[0]).text() ==="O" && $(gamePiece[3]).text() === "O" && $(gamePiece[6]).text() === "O" ||
       $(gamePiece[1]).text() ==="O" && $(gamePiece[4]).text() === "O" && $(gamePiece[7]).text() === "O" ||
       $(gamePiece[2]).text() ==="O" && $(gamePiece[5]).text() === "O" && $(gamePiece[8]).text() === "O"
       ) {
        ++oWin;
        console.log(oWin);
        oWinnerMessage();
        stopGame();
      }
};
});
// end documentReady
