function reverseWord() {
  // get a word from the user
  let word = prompt("Enter a word to reverse:");

  // exit if they clicked cancel or didn't write anything
  if (word === null || word === "") return;

  let reversed = "";

  // loop backwards through the string starting from the last index
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i]; // add the character to our new string
  }

  // show the result
  alert(`Original: ${word}\nReversed: ${reversed}`);
}

// execute the function
reverseWord();


