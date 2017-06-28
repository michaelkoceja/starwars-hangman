var Starwars = require('./../js/starwars.js').starwars;


var starwars = new Starwars();
starwars.hello();

$(document).ready(function() {
  console.log(`jQuery works!`);
});
