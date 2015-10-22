// 'use strict';
var xWin = 0;
var oWin = 0;
var player1 = "X";
var player2 = "O";
var playerTurn = player1;
var gamePieces = $('.gameboard').children();
var game = {};
var counter = 0;
var updateScoreboard;
var isWinner;

//Begin Document Ready
$(document).ready(function() {

//Click function on the gameboard and it's children so that if there is not a winner, we keep playing and putting in either X or O depending on player turn
  $(gamePieces).on('click', function(){
    if (!isWinner("X") && !isWinner("O") && !tieGame()) {
      $(this).text(playerTurn);
      $('.message').html('');

//Where isWInner function is called and checked after every click
//adds to win counter if the a winner is found
//calls updateScoreboard function and updates score accordingly
      if (isWinner(playerTurn)) {
        if (isWinner("X")) {
          xWin++;
          $('.message').html("" + playerTurn + " is the Winner!");
        }
        else if (isWinner("O")){
          oWin++;
          $('.message').html("" + playerTurn + " is the Winner!");
        } else {
          return true;
        }
        updateScoreboard();
      }

//Switches players thus switches between X's and O's
      if (playerTurn === player1){
        playerTurn = player2;
        counter++;
      } else{
        playerTurn = player1;
        counter++;
      }
    } else {
      $('#board').hide();
      $('.message').html("Tie Game");
    }
  });

  var tieGame = function(){
      if (!isWinner(playerTurn) && counter === 9){
        return "Cat Game";
      }
  };

//Updates scoreboard when there is a winner by updating HTML through jquery
  var updateScoreboard = function (){
    $('.x-score').html("X Score: " + xWin);
    $('.o-score').html("O Score: " + oWin);
  };

  //Allows players to restart game and is connected with the AJAX
  $('#create-game').on('click', function(){
    $(gamePieces).each(function(){
      $('#board').show();
      $(gamePieces).html('');
      $('.message').html("Let's Start a New Game!");
    });
    counter = 1;
  });

//Function to determin who is the winner.  Brute force here by refeerencing the DOM when running through winning scenarios.
 var isWinner = function (player) {
  return  ($(gamePieces[0]).text() === player && $(gamePieces[1]).text() ===  player && $(gamePieces[2]).text() ===  player) ||
          ($(gamePieces[3]).text() === player && $(gamePieces[4]).text() ===  player && $(gamePieces[5]).text() ===  player) ||
          ($(gamePieces[6]).text() === player && $(gamePieces[7]).text() ===  player && $(gamePieces[8]).text() ===  player) ||
          ($(gamePieces[0]).text() === player && $(gamePieces[4]).text() ===  player && $(gamePieces[8]).text() ===  player) ||
          ($(gamePieces[2]).text() === player && $(gamePieces[4]).text() ===  player && $(gamePieces[6]).text() ===  player) ||
          ($(gamePieces[0]).text() === player && $(gamePieces[3]).text() ===  player && $(gamePieces[6]).text() ===  player) ||
          ($(gamePieces[1]).text() === player && $(gamePieces[4]).text() ===  player && $(gamePieces[7]).text() ===  player) ||
          ($(gamePieces[2]).text() === player && $(gamePieces[5]).text() ===  player && $(gamePieces[8]).text() ===  player);
        };

});
