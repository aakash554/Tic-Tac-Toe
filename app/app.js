let us=0;
let cs=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const uspara=document.querySelector("#uscore");
const cspara=document.querySelector("#cscore");
const cChoice=()=>{
    let arr=["rock","paper","scisor"];
    let indx=Math.floor(Math.random()*3)
    return arr[indx];
}
const Winner=(userwin,userchoice,compChoice)=>{
    if(userwin){
        us++;
        uspara.innerText=us;
        msg.innerText=(`You Won,Your ${userchoice} beats ${compChoice}`);
        msg.style.backgroundColor="green";
    }
    else{
        cs++;
        cspara.innerText=cs;
        msg.innerText=(`You Loose ${compChoice} beats your ${userchoice}`);
        msg.style.backgroundColor="red";
    }
}
const game=(userchoice)=>{
    let compChoice=cChoice();
    
    if(userchoice==compChoice){
        msg.innerText=("Game Draw");
        msg.style.backgroundColor="darkblue";
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=(compChoice==="scisor"?true:false);
        }
        else if(userchoice==="paper"){
            userwin=(compChoice==="rock"?true:false);
        }
        else{
            userwin=(compChoice==="paper"?true:false);
        }
        Winner(userwin,userchoice,compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        game(userchoice);
    });
});