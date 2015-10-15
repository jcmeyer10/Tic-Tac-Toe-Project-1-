'use strict';
var xWin = 0;
var oWin = 0;
var player1 = "X";
var player2 = "O";
var playerTurn = player1;
var gamePiece = $('.gameboard').children();
var winner = 0;
var token = 0;
var tie = 0;

var updateScoreboard, xWinnerMessage, oWinnerMessage, isWinner;


//Begin Document Ready
$(document).ready(function() {
  xWin = 0;
  oWin = 0;
  player1 = "X";
  player2 = "O";
  playerTurn = player1;
  gamePiece = $('.gameboard').children();
  winner = 0;
  token = 0;
  tie = 0;

  updateScoreboard = function (){
    $('.x-score').html("X Score: " + xWin);
    $('.o-score').html("O Score: " + oWin);
    $('tie-score').html("Tie Score: " + tie);
  };

  isWinner = function (player){
    return  ($(gamePiece[0]).text() === player && $(gamePiece[1]).text() ===  player && $(gamePiece[2]).text() ===  player) ||
            ($(gamePiece[3]).text() === player && $(gamePiece[4]).text() ===  player && $(gamePiece[5]).text() ===  player) ||
            ($(gamePiece[6]).text() === player && $(gamePiece[7]).text() ===  player && $(gamePiece[8]).text() ===  player) ||
            ($(gamePiece[0]).text() === player && $(gamePiece[4]).text() ===  player && $(gamePiece[8]).text() ===  player) ||
            ($(gamePiece[2]).text() === player && $(gamePiece[4]).text() ===  player && $(gamePiece[6]).text() ===  player) ||
            ($(gamePiece[0]).text() === player && $(gamePiece[3]).text() ===  player && $(gamePiece[6]).text() ===  player) ||
            ($(gamePiece[1]).text() === player && $(gamePiece[4]).text() ===  player && $(gamePiece[7]).text() ===  player) ||
            ($(gamePiece[2]).text() === player && $(gamePiece[5]).text() ===  player && $(gamePiece[8]).text() ===  player);
  };

  $(gamePiece).on('click', function(){
    if (!isWinner("X") && !isWinner("O")) {
      $(this).text(playerTurn);

      if (isWinner(playerTurn)) {
        if (isWinner("X")) {
          xWin++;
        } else {
          oWin++;
        }
        updateScoreboard();
        $('.message').html("" + playerTurn + " is the Winner!")
      }

      if (playerTurn === player1){
        playerTurn = player2;
      } else {
        playerTurn = player1;
      }
    }
  });

  $('.startbutton').on('click', function(){
    $(gamePiece).each(function(){
      $(gamePiece).html('');
      $('.message').html("Let's Start a New Game!");
    });

  });
});



