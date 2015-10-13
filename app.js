// function cells(key) {
//     switch(key) {
//         case 'a': return null;
//         case 'b': return null;
//         case 'c': return null;
//         case 'd': return null;
//         case 'e': return null;
//         case 'f': return null;
//         case 'g': return null;
//         case 'h': return null;
//         case 'i': return null;
//         default : return null;
//     }
// }

// function getWinner() {
//     if (isWinner('x')) {
//       return 'x';
//     }
//     if (isWinner('o')) {
//       return 'o';
//     }
//     return null;
// }
// function isWinner(player) {
//     return winsRow(player) || winsColumn(player) || winsDiagonal(player);
// }
// function winsRow(player) {
//     return allThree(player, cells('a'), cells('b'), cells('c')) ||
//            allThree(player, cells('d'), cells('e'), cells('f')) ||
//            allThree(player, cells('g'), cells('h'), cells('i'));
// }
// function winsColumn(player) {
//     return allThree(player, cells('a'), cells('d'), cells('g')) ||
//            allThree(player, cells('b'), cells('e'), cells('h')) ||
//            allThree(player, cells('c'), cells('f'), cells('i'));
// }
// function winsDiagonal(player) {
//     return allThree(player, cells('a'), cells('e'), cells('i')) ||
//            allThree(player, cells('c'), cells('e'), cells('g'));
// }
// function allThree(player, cell_one, cell_two, cell_three) {
//     return (cell_one === player) && (cell_two === player) && (cell_three === player);
// }
'use strict';

$(document).ready(function() {
  var xWin = 0;
  var oWin = 0;
  var player1 = "X";
  var player2 = "O";
  var playerTurn = player1;
  var gamePiece = $('.gameboard').children();
  var winner = null
  var token = 0;

  // var fullBoard =  function(){
  //   $(gamePiece).each(function(){
  //     if ($(this).text()!== ''){
  //       token += 1;
  //     }
  //   });
  //   if (token === 9){
  //     return "Cat's Game";
  //   }
  //   console.log("Cat's Game")
  // };

  $('.box').on('click', function(){
      if (playerTurn === player1){
      $(this).text("X");
      whoWins();
      // fullBoard();
      playerTurn = player2;
      } else {
        $(this).text("O");
        whoWins();
        // fullBoard();
        playerTurn = player1;
      }
  });

// var newScore = function (){
//   if (xWin =+ 1){
//     return $('.x-score').html("X Score: " + xWin);
//     }
//   else if (yWin += 1){
//     return $('.y-score').html("Y Score: " + oWin)
//     };
//   };

  // var winnerX = function winnerX()

  var restart = $('.restartbutton').on('click', function(){
    $(gamePiece).each(function(){
      if ($(this).text()!== ''){
        token += 1;
            }
      if (token >= 1){
        $(gamePiece).html('');
      };
    return restart;
  });
});

  var whoWins = function whoWins() {
    if(
       $(gamePiece[0]).text() ==="X" && $(gamePiece[1]).text() === "X" && $(gamePiece[2]).text() === "X" ||
       $(gamePiece[3]).text() ==="X" && $(gamePiece[4]).text() === "X" && $(gamePiece[5]).text() === "X" ||
       $(gamePiece[6]).text() ==="X" && $(gamePiece[7]).text() === "X" && $(gamePiece[8]).text() === "X" ||
       $(gamePiece[0]).text() ==="X" && $(gamePiece[4]).text() === "X" && $(gamePiece[8]).text() === "X" ||
       $(gamePiece[2]).text() ==="X" && $(gamePiece[4]).text() === "X" && $(gamePiece[6]).text() === "X" ||
       $(gamePiece[0]).text() ==="X" && $(gamePiece[3]).text() === "X" && $(gamePiece[6]).text() === "X" ||
       $(gamePiece[1]).text() ==="X" && $(gamePiece[4]).text() === "X" && $(gamePiece[7]).text() === "X" ||
       $(gamePiece[2]).text() ==="X" && $(gamePiece[5]).text() === "X" && $(gamePiece[8]).text() === "X"
       ) {
        xWin += 1;
        console.log(xWin);
        return winner;
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
      oWin += 1;
      console.log(oWin);
      return winner;
      }
  };
})
// end documentReady




// var oCount=0;
// var xCount=0;
// var game = {
//   board: [null, null, null,
//           null, null, null,
//           null, null, null],
//   isWinner: function(player){

//   }
// };



// // var getWinner = function(
// //   if (isOwinner === true){
// //     return "O is the Winner!"
// //     oCount += 1;
// //     }
// //   else if (isXWinner === true){
// //     return "X is the Winner!";
// //     xCount += 1;
// // //   }
