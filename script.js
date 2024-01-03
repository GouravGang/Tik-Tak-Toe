console.log("tic tac toe");

let AudioGameOver=new Audio("gameover.mp3");
let turnAudio=new Audio("ting.mp3");
let musicAudio=new Audio("music.mp3");
let gameover=false;
// musicAudio.play();
let turn ="X";

const changeTurn=()=>{
   return turn==="X"?"0":"X";
}


const checkWin = () => {
   let boxtext = document.querySelectorAll(".boxtext"); // Use querySelectorAll

   let win = [
       [0, 1, 2, 15, -10, 90],
       [3, 4, 5, 15, 0, 90],
       [6, 7, 8, 15, 10, 90],
       [0, 3, 6, 5, 0, 0],
       [1, 4, 7, 15, 0, 0],
       [2, 5, 8, 25, 0, 0],
       [0, 4, 8, 15, 0, 135],
       [2, 4, 6, 15, 0, 45]
   ]; 

   win.forEach(e => {
       if (
           (boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
           (boxtext[e[1]].innerText === boxtext[e[2]].innerText) &&
           (boxtext[e[0]].innerText !== '')
       ) {
           let info = document.querySelector(".info");
           info.innerText = boxtext[e[0]].innerText + " Won";
           gameover = true;
           document.querySelector(".line").style.width="3px";
           document.querySelector(".line").style.transform=`translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`

         //   console.log(document.getElementsByClassName("Xscr")[0].innerText);
         //   console.log(boxtext[e[0]].innerText);
           if(boxtext[e[0]].innerText=="X")
           {
            console.log("True");
            // let num=document.getElementsByClassName("Xscr")[0].innerText;
            // console.log(num);
            // document.getElementsByClassName("Xscr")[0].innerText=document.getElementsByClassName("Xscr")[0].innerText+1;
            let xscrElement = document.getElementsByClassName("Xscr")[0];
            let currentScore = parseInt(xscrElement.textContent, 10);
            currentScore += 1;
            xscrElement.textContent = currentScore;
           }
           else{
            let xscrElement = document.getElementsByClassName("Yscr")[0];
            let currentScore = parseInt(xscrElement.textContent, 10);
            currentScore += 1;
            xscrElement.textContent = currentScore;
           }
       } 
   }); 
} 



let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtxt=element.querySelector(".boxtext");
     element.addEventListener('click', ()=>{
       if(boxtxt.innerText === '' && !gameover){
        boxtxt.innerText=turn;
        turn=changeTurn();  
        turnAudio.play();
        checkWin();
        if(!gameover){
           document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
        }
        if(gameover)
        {
           document.querySelector(".imagebox img").style.width="200px";
        }
       }
    })
})
 
let reset=document.querySelector(".reset");
reset.addEventListener('click' ,()=>{
   let boxtxt=document.querySelectorAll(".boxtext");
   Array.from(boxtxt).forEach(element=>{
      element.innerText="";
   }); 
   document.querySelector(".imagebox img").style.width="0px";
   document.querySelector(".line").style.width="0px";
   gameover=false;
   let info = document.querySelector(".info");
   info.innerText = "Turn for "+turn;
})
