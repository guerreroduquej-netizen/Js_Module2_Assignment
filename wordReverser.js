function reverseWord() {
  let word = prompt("Enter a word to reverse:");

  if (word === null || word === "") return;

  let reversed = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }

  alert(`Original: ${word}\nReversed: ${reversed}`);
}


