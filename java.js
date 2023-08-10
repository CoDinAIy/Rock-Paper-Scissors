function wholeGame() {
    function getComputerChoice() {
        const computerChoices = ["Rock", "Paper", "Scissors"] ;
         randomSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)] ;
        return randomSelection
    }
    
    let computerSelection = getComputerChoice()
    

    
    function rockPaperScissorsRound (computerSelection, playerSelection) {
        if (computerSelection === "Rock") {
            if (playerSelection === "Rock") {
                gameResult = "Draw!"
            } else if (playerSelection === "Paper") {
                gameResult = "You win! Paper beats Rock"
            } else {
                gameResult = "You lose! Rock beats Scissors"
            }
        } else if (computerSelection === "Paper") {
            if (playerSelection === "Rock") {
                gameResult = "You lose! Paper beats Rock"
            } else if (playerSelection === "Paper") {
                gameResult = "Draw!"
            } else {
                gameResult = "You win! Scissors beats Paper"
            }
        } else {
            if (playerSelection === "Rock") {
                gameResult = "You win! Rock beats Scissors"
            } else if (playerSelection === "Paper") {
                gameResult = "You lose! Scissors beats Paper"
            } else {
                gameResult = "Draw!"
            }
        }
        return gameResult
    }
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
         compResult = "Computer chose: " + computerSelection
         playerResult = "Player chose: " + playerSelection
         roundOutcome = rockPaperScissorsRound(computerSelection, playerSelection)
        
    }
 