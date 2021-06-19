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