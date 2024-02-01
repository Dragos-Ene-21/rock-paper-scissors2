function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    return computerChoice;
}

function playRound() {
    let myChoice = prompt("Please enter your choice");
    return myChoice;
}

let tie = 0;
let compWins = 0;
let userWins = 0;

for(let i = 1; i<=5; i++) {
    let userChoice = playRound();
    let computerChoice = getComputerChoice();
    console.log("Computer's Choice: " + computerChoice);

    if(userChoice === "rock" && computerChoice === "rock") {
        tie += 1;
    }
    else if(userChoice === "rock" && computerChoice === "scissors") {
        userWins += 1;
    }
    else if(userChoice === "rock" && computerChoice === "paper") {
        compWins += 1;
    }

    else if(userChoice === "paper" && computerChoice === "paper") {
        tie += 1;
    }
    else if(userChoice === "paper" && computerChoice === "rock") {
        userWins += 1;
    }
    else if(userChoice === "paper" && computerChoice === "scissors") {
        compWins += 1;
    }

    if(userChoice === "scissors" && computerChoice === "scissors") {
        tie += 1;
    }
    else if(userChoice === "scissors" && computerChoice === "paper") {
        userWins += 1;
    }
    else if(userChoice === "scissors" && computerChoice === "rock") {
        compWins += 1;
    }
}

if(userWins === compWins)
    console.log("It's a Tie");
else if(userWins > compWins)
    console.log("You Won");
else
    console.log("Computer Won");
console.log("The score is: " + userWins + " vs " + compWins);

