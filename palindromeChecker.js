function isPalindrome(word) {
  word = word.toLowerCase();
  
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  
  return word === reversed;
}

function checkPalindromes() {
  let word1 = prompt("Enter the first word:");
  let word2 = prompt("Enter the second word:");
  
  if (word1 === null || word2 === null) return;
  
  let result1 = isPalindrome(word1);
  let result2 = isPalindrome(word2);
  
  let msg = `Results:\n`;
  msg += `"${word1}" is a palindrome? ${result1 ? "Yes" : "No"}\n`;
  msg += `"${word2}" is a palindrome? ${result2 ? "Yes" : "No"}`;
  
  alert(msg);
}


