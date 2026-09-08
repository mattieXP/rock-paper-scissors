// Create a function that returns randomly "Rock", "Paper" or "Scissors"

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3);
    let answer = "Nothing";

    switch(randomNumber) {

        case 0:
            answer = "Rock";
        break;

        case 1:
            answer = "Paper";
        break;

        case 2:
            answer = "Scissors";
        break;

        default:
            answer = "A problem occured."
    }
    
    console.log("Computer says: " + answer);
    
    return answer;

}

//Have an input for the Human Choice

function getHumanChoice() {

    let humanChoice = prompt("What's your choice?", 'Rock, Scissors or Paper');
    console.log("Human says: " + humanChoice);
    return humanChoice;
}

// Keep track of scores

let humanScore = 0;
let computerScore = 0;

// Write the logic to play a single round

function playRound(humanChoice, computerChoice) {
    // Rendre les fonctions case insensitive
   humanChoice = humanChoice.toLowerCase();
   computerChoice = computerChoice.toLowerCase();
    // Comparer les résultats pour attribuer le gagnant + annoncer le gagnant
    // Incrémenter les scores
    let result = "winner";

    if (humanChoice == computerChoice) {
        result = "Ex aequo! Nobody wins";
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        result = "You win! Rock beats Scissors.";
        humanScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        result = "You win! Scissors beats Paper.";
        humanScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        result = "You win! Paper beats Rock.";
        humanScore++;
    } else {
        result = "You lose... Try again!"; 
        computerScore++;
    }

    console.log("Game master says: " + result);

}

//Entire game : Call playRound to play 5 rounds, 
//keep track of the scores and declare a winner at the end

function playGame() {
     playRound(getHumanChoice(),getComputerChoice());
     playRound(getHumanChoice(),getComputerChoice());
     playRound(getHumanChoice(),getComputerChoice());
     playRound(getHumanChoice(),getComputerChoice());
     playRound(getHumanChoice(),getComputerChoice());

     let result="win";

     if (humanScore > computerScore) {
        result = "You're the winner. Congrats!";
     } else if (humanScore == computerScore) {
        result = "You're both excellent. Nobody has the win. Maybe another day?";
     } else {
        result = "You lose. Try again!"
     }
     console.log("Game master says: End of 5 rounds. " + result);

     humanScore = 0;
     computerScore = 0;
}

