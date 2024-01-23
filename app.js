let userScore=0;
let compScore=0;
const choices =document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const user= document.querySelector("#user");
const comp= document.querySelector("#comp");
const reset=document.querySelector("#btt");


const genCompChoice = () =>{
    let arr=["rock", "paper", "rock"];
    const rand = Math.floor(Math.random()*3);
    return arr[rand];
};

const draw =() =>{
    console.log("game draw");
    msg.style.backgroundColor="rgb(10, 10, 21)";
    msg.innerText="Game draw! play again.";
}

const playGame = (userChoice) =>{
    console.log("userChoice = ", userChoice);
   //generate computer choice
   const compchoice = genCompChoice();
   console.log("comp choice = ", compchoice);
   if(userChoice==compchoice){
    draw();
   }
   else{
    let userWin = true;
    if(userChoice==="rock"){
    userWin = compchoice === "paper" ? false : true;
    }
    else if(userChoice === "paper"){
        userWin = compchoice === "rock" ? true : false;
    }
    else{
        userWin = compchoice === "rock" ? false :true;
    }
    showWinner(userWin, userChoice, compchoice);
   }
};

const showWinner = (userWin, userChoice, compchoice) =>{
    if(userWin){
        userScore++;
        user.innerText= userScore;
        console.log("You win");
        msg.innerText=`You Win! ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        comp.innerText=compScore;
        console.log("you lose");
        msg.innerText=`You Lose! ${compchoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

reset.addEventListener("click" , () =>{
    userScore=0;
    compScore=0;
    user.innerText="0";
    comp.innerText="0";
    msg.innerText="Play your move";
    msg.style.backgroundColor="rgb(10, 10, 21)";
});