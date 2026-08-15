function analyzeString() {
  // get input text from the user
  let text = prompt("Enter a sentence to analyze:");
  
  if (text === null) return; // exit if canceled
  
  // 1. count characters (just the length property of the string)
  let charCount = text.length;
  
  // 2. count vowels using a basic loop
  let vowelsCount = 0;
  let vowels = "aeiouAEIOU"; // a string containing all vowels to check against
  
  for (let i = 0; i < text.length; i++) {
    // check if the current character is inside our vowels string
    if (vowels.includes(text[i])) {
      vowelsCount++;
    }
  }
  
  // 3. count words
  // we do a simple loop tracking spaces to avoid counting double spaces as words
  let wordCount = 0;
  let inWord = false;
  
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " ") {
      // if we are not currently tracking a word, we just found a new one
      if (!inWord) {
        wordCount++;
        inWord = true; // flag that we are inside a word
      }
    } else {
      // we hit a space, so we are no longer inside a word
      inWord = false; 
    }
  }
  
  // show results
  let message = `Analysis for: "${text}"\n`;
  message += `Characters: ${charCount}\n`;
  message += `Vowels: ${vowelsCount}\n`;
  message += `Words: ${wordCount}`;
  
  alert(message);
}

// run the function
analyzeString();


