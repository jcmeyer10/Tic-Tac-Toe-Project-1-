'use strict';
var xWin = 0;
var oWin = 0;
var player1 = "X";
var player2 = "O";
var playerTurn = player1;
var gamePieces = $('.gameboard').children();
var winner = 0;
var token = 0;
var tie = 0;
var game = {};
var counter = 0;

var updateScoreboard, xWinnerMessage, oWinnerMessage, isWinner;


//Begin Document Ready
$(document).ready(function() {
  xWin = 0;
  oWin = 0;
  player1 = "X";
  player2 = "O";
  playerTurn = player1;
  gamePieces = $('.gameboard').children();
  winner = 0;
  token = 0;
  tie = 0;
  var game = {};

  var updateScoreboard, xWinnerMessage, oWinnerMessage, isWinner;

//Updates scoreboard when there is a winner by updating HTML through jquery
  updateScoreboard = function (){
    $('.x-score').html("X Score: " + xWin);
    $('.o-score').html("O Score: " + oWin);
    $('tie-score').html("Tie Score: " + tie);
  };

//Function to determin who is the winner.  Brute force here by refeerencing the DOM when running through winning scenarios.
  isWinner = function (player){
    return  ($(gamePieces[0]).text() === player && $(gamePieces[1]).text() ===  player && $(gamePieces[2]).text() ===  player) ||
            ($(gamePieces[3]).text() === player && $(gamePieces[4]).text() ===  player && $(gamePieces[5]).text() ===  player) ||
            ($(gamePieces[6]).text() === player && $(gamePieces[7]).text() ===  player && $(gamePieces[8]).text() ===  player) ||
            ($(gamePieces[0]).text() === player && $(gamePieces[4]).text() ===  player && $(gamePieces[8]).text() ===  player) ||
            ($(gamePieces[2]).text() === player && $(gamePieces[4]).text() ===  player && $(gamePieces[6]).text() ===  player) ||
            ($(gamePieces[0]).text() === player && $(gamePieces[3]).text() ===  player && $(gamePieces[6]).text() ===  player) ||
            ($(gamePieces[1]).text() === player && $(gamePieces[4]).text() ===  player && $(gamePieces[7]).text() ===  player) ||
            ($(gamePieces[2]).text() === player && $(gamePieces[5]).text() ===  player && $(gamePieces[8]).text() ===  player);
  };

var tieGame = function(){
  for (var i = 0; i < $('.box').length; i++) {
      if ($('.box').eq(i).html() === "") {
        return false;
      }
    }
    return "Cat's Game";
  };

  if (counter === 8){
    console.log("meow");
  }

//Click function on the gameboard and it's children so that if there is not a winner, we keep playing and putting in either X or O depending on player turn
  $(gamePieces).on('click', function(){
    if (!isWinner("X") && !isWinner("O")) {
      $(this).text(playerTurn);
      $('.message').html('');

//Where isWInner function is called and checked after every click
//adds to win counter if the a winner is found
//calls updateScoreboard function and updates score accordingly
    if (isWinner(playerTurn)) {
      if (counter === 9){
        console.log("meow")
      }
      else if (isWinner("X")) {
        xWin++
        $('.message').html("" + playerTurn + " is the Winner!");
      } else {
        oWin++;
        $('.message').html("" + playerTurn + " is the Winner!");
          }
    updateScoreboard();
  }

//Switches players thus switches between X's and O's
    if (playerTurn === player1){
      playerTurn = player2;
      counter++;
      console.log(counter);
    } else {
      playerTurn = player1;
      counter++;
      console.log(counter);
        }
      }
  });

//Allows players to restart game
  $('#create-game').on('click', function(){
    $(gamePieces).each(function(){
      $(gamePieces).html('');
      $('.message').html("Let's Start a New Game!");
      counter = 0;
    });

  });
});

