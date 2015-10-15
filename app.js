//Having some trouble with document.ready so I declared all my variables outside so they were loaded and accessible to any function that mgith rely upon them

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

  var updateScoreboard, xWinnerMessage, oWinnerMessage, isWinner;

//Updates scoreboard when there is a winner by updating HTML through jquery
  updateScoreboard = function (){
    $('.x-score').html("X Score: " + xWin);
    $('.o-score').html("O Score: " + oWin);
    $('tie-score').html("Tie Score: " + tie);
  };

//Function to determin who is the winner.  Brute force here by refeerencing the DOM when running through winning scenarios.
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

//Click function on the gameboard and it's children so that if there is not a winner, we keep playing and putting in either X or O depending on player turn
  $(gamePiece).on('click', function(){
    if (!isWinner("X") && !isWinner("O")) {
      $(this).text(playerTurn);
      $('.message').html('')


//Where isWInner function is called and checked after every click
//adds to win counter if the a winner is found
//calls updateScoreboard function and updates score accordingly
      if (isWinner(playerTurn)) {
        if (isWinner("X")) {
          xWin++
        } else {
          oWin++;
        }
        updateScoreboard();
        $('.message').html("" + playerTurn + " is the Winner!")
      }
//Switches players thus switches between X's and O's
      if (playerTurn === player1){
        playerTurn = player2;
      } else {
        playerTurn = player1;
      }
    }
  });

//Allows players to restart game
  $('.startbutton').on('click', function(){
    $(gamePiece).each(function(){
      $(gamePiece).html('');
      $('.message').html("Let's Start a New Game!");
    });

  });
});



