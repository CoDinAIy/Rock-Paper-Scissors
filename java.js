function getComputerChoice() {
    const computerChoices = ["Rock", "Paper", "Scissors"] ;
     randomSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)] ;
    return randomSelection
}

let computerSelection = getComputerChoice()

function validAnswerCheck() {
    let correct = false ;
    while (! correct) {
        let input = prompt("Enter Rock Paper or Scissors") 
        if (input === "rock" || input === "paper" || input === "scissors") {
            correct = true 
            return input 
        }
    }
    }
let playerSelection = validAnswerCheck()

function rockPaperScissorsRound (computerSelection, playerSelection) {
    let gameResult ;
    if (computerSelection === "Rock") {
        if (playerSelection === "rock") {
            gameResult = "Draw!"
        } else if (playerSelection === "paper") {
            gameResult = "You win! Paper beats Rock"
        } else {
            gameResult = "You lose! Rock beats Scissors"
        }
    } else if (computerSelection === "Paper") {
        if (playerSelection === "rock") {
            gameResult = "You win! Paper Beats Rock"
        } else if (playerSelection === "paper") {
            gameResult = "Draw!"
        } else {
            gameResult = "You lose! Scissors beats Paper"
        }
    } else {
        if (playerSelection === "rock") {
            gameResult = "You lose! Rock beats Scissors"
        } else if (playerSelection === "paper") {
            gameResult = "You win! Scissors beats Paper"
        } else {
            gameResult = "Draw!"
        }
    }
    return gameResult
}
console.log("Computer chose: " + computerSelection)
console.log("You chose: "  + playerSelection)
rockPaperScissorsRound(computerSelection, playerSelection)