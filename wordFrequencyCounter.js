function countWordFrequencies() {
  // ask user for a sentence
  let text = prompt("Enter a sentence to see word frequencies:");
  
  if (text === null || text.trim() === "") return;
  
  // convert to lowercase to make it case-insensitive
  text = text.toLowerCase();
  
  // split into an array of words (using space as the separator)
  let wordsArray = text.split(" ");
  
  // use an object to store how many times each word appears
  // objects act like dictionaries: keys are words, values are counts
  let frequencies = {};
  
  for (let i = 0; i < wordsArray.length; i++) {
    let word = wordsArray[i];
    
    // skip empty strings just in case there were multiple spaces
    if (word === "") continue;
    
    // if the word is already a property in our object, add 1 to its count
    if (frequencies[word] !== undefined) {
      frequencies[word]++;
    } else {
      // if it's the first time we see it, create the property and set it to 1
      frequencies[word] = 1;
    }
  }
  
  // build the final message to show
  let resultMessage = "Word frequencies:\n";
  
  // loop through the object properties using a for-in loop
  for (let key in frequencies) {
    resultMessage += `${key}: ${frequencies[key]}\n`;
  }
  
  alert(resultMessage);
}

// start the script
countWordFrequencies();









