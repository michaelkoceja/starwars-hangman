var Starwars = require('./../js/starwars.js').starwars;


function displayGame(word) {
  var wordToDisplay = word.split("");
  wordToDisplay.forEach(function(letter, index) {
    if (letter === '-') {
      $('.letter-board').append(`<span class="dash">${letter}</span>`);
    } else {
      $('.letter-board').append(`<span data-index="${index}" class="letter"></span>`);
    }
  });
}

function displayLetter(letter, index) {
  $(`span[data-index="${index}"]`).text(letter);
}

function displayPiece(guessedLetter, piece) {
  $(`.${piece}`).show();
  $('.wrong-letters .body').append(`<span>${guessedLetter}</span>`);
}

$(document).ready(function() {
  var starwars = new Starwars();
  starwars.setupGame(displayGame);

  $('form').submit(function(e) {
    e.preventDefault();
    var guessedLetter = $('#guessed-letter').val();

    starwars.guess(guessedLetter, displayLetter, displayPiece);

    if (starwars.checkForLoser()) {
      alert('YOU LOSE!');
    }
    if (starwars.checkForWinner()) {
      alert('YOU WINNNN!!!!!');
    }

  });
});
