let playerWins = 0;
let computerWins = 0;
let history = [];

function playRPS() {
  const options = ["rock", "paper", "scissors"];
  
  while (true) {
    let playerMove = prompt("Enter rock, paper, or scissors (or 'exit' to stop):");
    
    if (playerMove === null || playerMove.toLowerCase() === "exit") {
      alert("Thanks for playing!");
      break;
    }
    
    playerMove = playerMove.toLowerCase();
    
    if (!options.includes(playerMove)) {
      alert("Invalid move! Try again.");
      continue;
    }
    
    let computerIndex = Math.floor(Math.random() * 3);
    let computerMove = options[computerIndex];
    
    let result = "";
    if (playerMove === computerMove) {
      result = "It's a tie!";
    } else if (
      (playerMove === "rock" && computerMove === "scissors") ||
      (playerMove === "paper" && computerMove === "rock") ||
      (playerMove === "scissors" && computerMove === "paper")
    ) {
      result = "You win!";
      playerWins++;
    } else {
      result = "Computer wins!";
      computerWins++;
    }
    
    let matchSummary = `You: ${playerMove} vs Bot: ${computerMove} -> ${result}`;
    history.push(matchSummary);
    
    if (history.length > 5) {
      history.shift();
    }
    
    let statsMessage = `Result: ${result}\n\n`;
    statsMessage += `Score - You: ${playerWins} | Computer: ${computerWins}\n\n`;
    statsMessage += `History (last 5):\n${history.join("\n")}`;
    
    alert(statsMessage);
  }
}


