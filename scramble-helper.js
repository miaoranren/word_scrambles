// Create a function that reverses a word

function wordReverse(word) {
  let letters = word.split('');
  let newWord = [];
  for (let i = letters.length - 1; i >= 0; i = i - 1) {
    newWord.push(letters[i]);
  }
  console.log(newWord.join(''));
}

wordReverse(testWord)
// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.

// function arrayReverse(wordArray) {
//   let newArray = [];
//   for (let word of wordArray) {
//     let newReverseword = wordReverse(word);
//     console.log(newReverseword);
//     newArray.push(newReverseword);
//   }
//   return newArray;
// }

// wordArray = ['hello', 'hi', 'goodbye']
// arrayReverse(wordArray)


// Create a function that returns a random word from an array

// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?


// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.



// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.


// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.
