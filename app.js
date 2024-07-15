let userScore = 0;
let compScore = 0;

//Choice selector
const choices = document.querySelectorAll(".choice");
//Message selector
const msg = document.querySelector("#msg");
//User Score 
const userScorePara = document.querySelector("#user-score");
//Computer Score
const compScorePara = document.querySelector("#computer-score");

const getCompChoice = () => {
    const options = ["rock", "paper" , "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    //rock, paper, scissors
}

const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game Draw. Play again.";
    msg.style.backgroundColor = "081b31"; 
}


const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"; 
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose.");
        msg.innerText = `You Lose, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"; 
    }
}


const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate computer choice
    const compChoice = getCompChoice();
    console.log("Comp choice = ", compChoice);

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true; 
        if (userChoice === "rock") {
            //compChoice is scissors or paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //compChoice is rock or scissor
            userWin = compChoice === "scissor" ? false : true;
        } else {
            //last userChoice === scissor. compChoice is rock or paper
            userWin = compChoice === "rock" ? false : true; 
        }

        showWinner(userWin, userChoice, compChoice); 
    }
};

choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    })
});