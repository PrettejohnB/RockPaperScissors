function computerPlay() {
  const max = 3;
  let hand = Math.floor(Math.random() * 3);

  let hands = ["Rock", "Paper", "Scissors"];

  return hands[hand];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      return ["Tie - You both chose Rock", 0, 0];
    } else if (computerSelection == "scissors") {
      return ["You Win! Rock beats Scissors", 1, 0];
    } else if (computerSelection == "paper") {
      return ["You Lose! Paper beats Rock", 0, 1];
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "scissors") {
      return ["Tie - You both chose Scissors", 0, 0];
    } else if (computerSelection == "rock") {
      return ["You Lose! Rock beats Scissors", 0, 1];
    } else if (computerSelection == "paper") {
      return ["You Win! Scissors beats Paper", 1, 0];
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "paper") {
      return ["Tie - You both chose Paper", 0, 0];
    } else if (computerSelection == "scissors") {
      return ["You Lose! Scissors beats Paper", 0, 1];
    } else if (computerSelection == "rock") {
      return ["You Win! Paper beats Rock", 1, 0];
    }
  } else {
    return "Invalid selection, please try again.";
  }
}

function game() {
  let numberPlays = 0;
  let computerWins = 0;
  let playerWins = 0rock;

  while (numberPlays < 5) {
    let playerSelection = prompt("Choose your hand");
    let computerSelection = computerPlay();
    result = playRound(playerSelection, computerSelection);
    numberPlays++;

    console.log(result[0]);
    playerWins += result[1];
    computerWins += result[2];
  }

  console.log(
    "GAME OVER.... Final Score - Player: " +
      playerWins.toString() +
      " wins. Computer: " +
      computerWins.toString() +
      " wins."
  );
}

game();

// rock > scissors
// paper > rock
// scissors > paper
