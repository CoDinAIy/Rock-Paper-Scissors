//Create getComputerChoice function

//Store variable computerChoices as an array which holds Rock,Paper,Scissors

//Use an algorithm to select at random from computerChoice any of the 3 values

//Store this random selection as computerSelection

//Check which value is randomly selected using console.log computerSelection

//2) Create validAnswerCheck function

//Create x variable set to ‘false’

//Use while x = false loop

//Ask user input ‘enter rock paper or scissors’ and store as playerSelection

//If playerSelection does not equate to ‘rock’ ‘paper’ or ‘scissors’ return playerSelection = prompt ‘not a valid answer please retry here’ and x = false

//If playerSelection equates to either 3 x = true

//3) Create formatPlayerSelection function

//Write algorithm which lower cases all characters but capitalises first character of playerSelection and store it as playerSelection

//4) Create rockPaperScissorsRound function which takes playerSelection and computerSelection

//gameResult variable = ‘0’

//If computerSelection = Rock then if playerSelection = Paper set gameResult to ‘You win! Paper beats Rock’. Else if playerSelection = Scissors set gameResult to ‘You lose! Rock beats Scissors’. Else gameResult = Draw!

//Else if computerSelection = Paper then if playerSelection = Paper set gameResult to Draw!. Else if playerSelection = Scissors set gameResult to You win! Scissors beats Paper. Else set gameResult to You lose! Paper beats Rock.

//Else                                                                                                         If playerSelection = Paper set gameResult to You lose! Scissors beats Paper. Else if playerSelection = Scissors set gameResult to Draw!. Else gameResult = You win! Rock beats Scissors

//Return gameResult


function getComputerChoice() {
    const computerChoices = ["Rock", "Paper", "Scissors"] ;
     randomSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)] ;
    return randomSelection
}

let computerSelection = getComputerChoice()
console.log(computerSelection)

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
        validAnswerCheck()