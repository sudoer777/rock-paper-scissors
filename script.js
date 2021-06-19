function computerPlay() {
    /*
    Generate random number from 0 - 2
    If 0 return rock
    If 1 return paper
    If 2 return scissors
    */

    let num = Math.floor(Math.random()*3);
    
    if(num == 0) return "Rock";
    else if(num == 1) return "Paper";
    else if(num == 2) return "Scissors";
}

function playRound(playerSelection, computerSelection)
{
    /*
    Change playerSelection and computerSelection to all lowercase and capitalize
            first letter
    Check if playerSelection and computerSelection are valid values
    Compare, and return who won
    */

    playerSelection = playerSelection[0].toUpperCase() +
            playerSelection.substring(1).toLowerCase();
    computerSelection = computerSelection[0].toUpperCase() +
            computerSelection.substring(1).toLowerCase();

    // Check for invalid value
    if ((playerSelection != "Rock" && playerSelection != "Paper" &&
            playerSelection != "Scissors") || (computerSelection != "Rock" &&
            computerSelection != "Paper" && computerSelection != "Scissors")) {
        return "Error: invalid selection!";
    }

    // Tie
    if(playerSelection == computerSelection) return "You Tie!"

    let playerWins = false;
    // Check if player wins
    if((playerSelection == "Rock" && computerSelection == "Scissors") ||
            (playerSelection == "Paper" && computerSelection == "Rock") ||
            (playerSelection == "Scissors" && computerSelection == "Paper"))
        playerWins = true;

    // Return end game result
    if(playerWins)
        return "You Win! " + playerSelection + " beats " + computerSelection;
    else return "You Lose! " + computerSelection + " beats " + playerSelection;
}

function game() {
    /*
    PURPOSE: Plays five rounds of RPS

    Loop five times:
        Prompt for user value
        Check if value is valid
            If it is, run game and output result
            If not, output an error and restart
    */

    let i = 0;
    let playerScore = 0;
    let computerScore = 0;
    while(i < 5) {
        let playerValue = prompt("Choose your weapon (rock, paper, scissors):").
                toLowerCase();
        while(playerValue != "rock" && playerValue != "paper" &&
                playerValue != "scissors")
            playerValue = prompt("Invalid option! Choose your weapon " +
                    "(rock, paper, scissors):").toLowerCase();
        
        let result = (playRound(playerValue, computerPlay()));
        console.log(result);
        alert(result);

        if(result.indexOf("You Win! ") != -1) playerScore++;
        if(result.indexOf("You Lose! ") != -1) computerScore++;
        i++;
    }

    // Display winner
    let winnerMessage;
    if(playerScore > computerScore)
        winnerMessage = "You win with a score of " + playerScore +
                " to " + computerScore + "!";
    else if(playerScore < computerScore)
        winnerMessage = "You lose with a score of " + playerScore + " to " +
                computerScore + ".";
    else
        winnerMessage = "You tie with a score of " + playerScore + " to " +
                computerScore + ".";

    console.log(winnerMessage);
    alert(winnerMessage);
}