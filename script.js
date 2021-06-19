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
    Change playerSelection and computerSelection to all lowercase and capitalize first letter
    Check if playerSelection and computerSelection are valid values
    Compare, and return who won
    */

    playerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase();
    computerSelection = computerSelection[0].toUpperCase() + computerSelection.substring(1).toLowerCase();

    // Check for invalid value
    if ((playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors")
                || (computerSelection != "Rock" && computerSelection != "Paper" && computerSelection != "Scissors")) {
        return "Error: invalid selection!";
    }

    // Tie
    if(playerSelection == computerSelection) return "You tied!"

    let playerWins = false;
    // Check if player wins
    if((playerSelection == "Rock" && computerSelection == "Scissors")
                || (playerSelection == "Paper" && computerSelection == "Rock")
                || (playerSelection == "Scissors" && computerSelection == "Paper"))
        playerWins = true;

    // Return end game result
    if(playerWins) return "You Win! " + playerSelection + " beats " + computerSelection;
    else return "You Lose! " + computerSelection + " beats " + playerSelection;
}