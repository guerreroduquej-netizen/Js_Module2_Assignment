function countWordFrequencies() {
  let text = prompt("Enter a sentence to see word frequencies:");
  
  if (text === null || text.trim() === "") return;
  
  text = text.toLowerCase();
  
  let wordsArray = text.split(" ");
  
  let frequencies = {};
  
  for (let i = 0; i < wordsArray.length; i++) {
    let word = wordsArray[i];
    
    if (word === "") continue;
    
    if (frequencies[word] !== undefined) {
      frequencies[word]++;
    } else {
      frequencies[word] = 1;
    }
  }
  
  let resultMessage = "Word frequencies:\n";
  
  for (let key in frequencies) {
    resultMessage += `${key}: ${frequencies[key]}\n`;
  }
  
  alert(resultMessage);
}


