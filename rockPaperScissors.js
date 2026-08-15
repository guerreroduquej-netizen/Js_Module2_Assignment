// Let's set up the variables we need for the game state
let playerWins = 0;
let computerWins = 0;
let history = []; // array to store the last 5 matches

function playRPS() {
  // basic options for the game
  const options = ["rock", "paper", "scissors"];
  
  while (true) {
    // ask the user for their move
    let playerMove = prompt("Enter rock, paper, or scissors (or 'exit' to stop):");
    
    // check if user wants to quit or clicked cancel
    if (playerMove === null || playerMove.toLowerCase() === "exit") {
      alert("Thanks for playing!");
      break;
    }
    
    playerMove = playerMove.toLowerCase();
    
    // validate if the input is correct
    if (!options.includes(playerMove)) {
      alert("Invalid move! Try again.");
      continue;
    }
    
    // let the computer choose randomly
    let computerIndex = Math.floor(Math.random() * 3);
    let computerMove = options[computerIndex];
    
    // figure out who won using basic if-else logic
    let result = "";
    if (playerMove === computerMove) {
      result = "It's a tie!";
    } else if (
      (playerMove === "rock" && computerMove === "scissors") ||
      (playerMove === "paper" && computerMove === "rock") ||
      (playerMove === "scissors" && computerMove === "paper")
    ) {
      result = "You win!";
      playerWins++; // increment player score
    } else {
      result = "Computer wins!";
      computerWins++; // increment computer score
    }
    
    // save the match result in our history array
    let matchSummary = `You: ${playerMove} vs Bot: ${computerMove} -> ${result}`;
    history.push(matchSummary);
    
    // keep only the last 5 matches in the array
    if (history.length > 5) {
      history.shift(); // remove the oldest one at the start of the array
    }
    
    // build the stats message to show the user
    let statsMessage = `Result: ${result}\n\n`;
    statsMessage += `Score - You: ${playerWins} | Computer: ${computerWins}\n\n`;
    statsMessage += `History (last 5):\n${history.join("\n")}`;
    
    alert(statsMessage);
  }
}

// start the game
playRPS();

