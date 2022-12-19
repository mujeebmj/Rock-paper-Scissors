let userChoice = document.querySelector("#userChoice");
let computerChoice = document.querySelector("#computerChoice");
let roundWinner = document.querySelector("#roundWinner");
let totalPlayerWins = document.querySelector("#playerWins");
let totalComputerWins = document.querySelector("#computerWins");
let tie = document.querySelector("#tie");
let finalWinner = document.querySelector(".finalWinner");
let mysound = new Audio("./sound.mp3");
let startAgainButton = document.querySelector('.startAgainButton');


const options = [ "Rock" , "Paper" , "Scissors" ];

tie.innerHTML = 0;
totalPlayerWins.innerHTML = 0 ;
totalComputerWins.innerHTML = 0 ;

let getUserChoiceRock = document.querySelector("#rock");
    getUserChoiceRock.addEventListener("click", () => {
    userChoice.innerHTML = "Rock";
    mysound.play();
    computerChoice.innerHTML = getComputerChoice();
    playRound();
    winnerDec();

});

let getUserChoicePaper = document.querySelector("#paper");
    getUserChoicePaper.addEventListener("click", () => {
    userChoice.innerHTML = "Paper";
    mysound.play()
    computerChoice.innerHTML = getComputerChoice();
    playRound();
    winnerDec();

});

let getUserChoiceScissors = document.querySelector("#scissors");
    getUserChoiceScissors.addEventListener("click", () => {
    userChoice.innerHTML = "Scissors";
    mysound.play()
    computerChoice.innerHTML = getComputerChoice();
    playRound();
    winnerDec();

});

function getComputerChoice() {

    choice = options[Math.floor(Math.random() * options.length)];
    return choice  

}


function playRound(){

if (userChoice.innerHTML === computerChoice.innerHTML) {
    roundWinner.innerHTML = "Its a tie !"; 
    tie.innerHTML++ ;
    
} 
if (computerChoice.innerHTML === "Rock" && userChoice.innerHTML === "Scissors" ||
    computerChoice.innerHTML === "Paper" && userChoice.innerHTML === "Rock" || 
    computerChoice.innerHTML === "Scissors" && userChoice.innerHTML === "Paper" ) {
    roundWinner.innerHTML =  "You Loose ! " + computerChoice.innerHTML + " beats " + userChoice.innerHTML 
    totalComputerWins.innerHTML++
    
}

if (userChoice.innerHTML === "Rock" && computerChoice.innerHTML === "Scissors" || 
    userChoice.innerHTML === "Paper" && computerChoice.innerHTML === "Rock" ||
    userChoice.innerHTML === "Scissors" && computerChoice.innerHTML === "Paper") {
    roundWinner.innerHTML =  "You Win ! " + userChoice.innerHTML + " beats " + computerChoice.innerHTML
    totalPlayerWins.innerHTML++
    
}
}


console.log(tie.innerHTML);
console.log(totalComputerWins.innerHTML);
console.log(totalPlayerWins.innerHTML);

function winnerDec (){

if  (totalPlayerWins.innerHTML == 5 && totalComputerWins.innerHTML < 5){

    finalWinner.innerHTML = "Congratulations Buddy You Win ! Want to Play Again ?"
    const button = document.createElement('button')
    button.classList.add('btn')
    startAgainButton.appendChild(button)
    button.innerHTML = 'Start Again';
    button.style.borderRadius = '20px';

    
}

if (totalComputerWins.innerHTML == 5 && totalPlayerWins.innerHTML < 5 ) {
    
    finalWinner.innerHTML = "Oh No__You Loose ! Lets Try One More Time."
    const button = document.createElement('button')
    button.classList.add('btn')
    button.addEventListener('click', console.log("hello"))
    startAgainButton.appendChild(button)
    button.innerHTML = 'Start Again'
    button.style.borderRadius = '40px';
    
}
}






