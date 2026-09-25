let userScore = 0;
let compScore= 0;
let msg = document.getElementById("msg");
let result = document.getElementById("result"); 
let userCount = document.getElementById("user-score");
let compCount = document.getElementById("com-score")

const choice = document.querySelectorAll(".images2");
const genCompChoice = () =>{
    const options = ['rock','paper','scissors'];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
} 
const drawGame = () =>{
    msg.innerText = "Game Draw!Play again.";
    msg.style.backgroundColor = "rgb(32, 32, 32)";
    msg.style.color = "azure";

}
const playChoice = () =>{
    return userChoice;
}   

const playGame = (userChoice) =>{
    console.log("User choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice = ",compChoice );
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false : true;
        }else if(userChoice === "paper") {
            userWin = compChoice === "scissors"? false : true;
        } else {
            userWin = compChoice === "rock"? false : true;
            
        }
        if(userWin){
            userScore++;
            msg.innerText = "You Win!";
            msg.style.backgroundColor = "green";
            msg.style.color = "azure";
            userCount.innerText = userScore;
        }else{
            compScore++;
            msg.innerText = "You loose!"
            msg.style.backgroundColor = "red";
            msg.style.color = "azure";
            compCount.innerText = compScore;
        }
    }
    result.innerText = `you choose ${userChoice} Computer choose ${compChoice}.`;

}
choice.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    })    
});