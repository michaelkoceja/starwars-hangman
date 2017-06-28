function Starwars() {

}

Starwars.prototype.hello = function() {
  console.log('hi!');
}

exports.starwars = Starwars;
