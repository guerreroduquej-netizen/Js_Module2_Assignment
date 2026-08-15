// helper function to check if a single word is a palindrome
function isPalindrome(word) {
  // convert to lowercase to avoid case issues (e.g., 'Ana' should be a palindrome)
  word = word.toLowerCase();
  
  // reverse the word using a basic loop
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  
  // if the original is exactly the same as the reversed string, it's a palindrome!
  return word === reversed;
}

function checkPalindromes() {
  // get two words from the user
  let word1 = prompt("Enter the first word:");
  let word2 = prompt("Enter the second word:");
  
  if (word1 === null || word2 === null) return;
  
  // check both words using our helper function
  let result1 = isPalindrome(word1);
  let result2 = isPalindrome(word2);
  
  // prepare the message to display
  let msg = `Results:\n`;
  msg += `"${word1}" is a palindrome? ${result1 ? "Yes" : "No"}\n`;
  msg += `"${word2}" is a palindrome? ${result2 ? "Yes" : "No"}`;
  
  alert(msg);
}

// run the program
checkPalindromes();

