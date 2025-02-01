let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
     const options = ["rock", "paper", "scissor"];
     const randomIdx = Math.floor(Math.random() * 3);
     return options[randomIdx];
}

const drawGame = () => {
 msg.innerText = "Game was draw";
 msg.style.backgroundColor = "rgb(53, 60, 95)"
 
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    }
    else{
        compScore++;
        compScorePara.innerText = userScore; 
        msg.innerText = `You loose!! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    //Generate computer choice -> modular programming 
    // creating seperate function for the resuable
    const compChoice = genCompChoice();
    console.log("Comp choice = ", compChoice);
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); 
        playGame(userChoice);

    })
})