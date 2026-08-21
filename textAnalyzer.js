function analyzeString() {
  let text = prompt("Enter a sentence to analyze:");
  
  if (text === null) return;
  
  let charCount = text.length;
  
  let vowelsCount = 0;
  let vowels = "aeiouAEIOU";
  
  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
      vowelsCount++;
    }
  }
  
  let wordCount = 0;
  let inWord = false;
  
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " ") {
      if (!inWord) {
        wordCount++;
        inWord = true;
      }
    } else {
      inWord = false; 
    }
  }
  
  let message = `Analysis for: "${text}"\n`;
  message += `Characters: ${charCount}\n`;
  message += `Vowels: ${vowelsCount}\n`;
  message += `Words: ${wordCount}`;
  
  alert(message);
}


