* Use Starwars API (https://swapi.co/)
* app will query the root api endpoint for the list of different categories (films, people, planets, species, starships, vehicles)
* app will randomly select a category returned from root and initiate an ajax call to that categories endpoint
* using the return from that endpoint, the app will select a random result and grab it's name/title/etc and return that value
* the app will construct a hangman game board using the value returned from previous ajax request
* the game board will have blank spaces that correspond to the word length
* the noose will be empty by default
* upon failure of checking a letter against the word a piece of the hangman will be introduced to the UI
* wrong letters will be tracked and appended to another element
* pressing a play again button will reset the app to initial state
