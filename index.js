//Default Player 1 & Player 2 Names
var default1 = document.querySelector("#player1 h2");
var default2 = document.querySelector("#player2 h2");

function diceGame(){

// Connecting player names 
var player1 = prompt("Player 1 Name ");
var player2 = prompt("Player 2 Name ");
default1.textContent = player1 ;
default2.textContent = player2 ;

// Random Numbers Generator for P1 & P2 
var p1 = Math.floor(( Math.random() *6 ) + 1);
var p2 = Math.floor(( Math.random() *6 ) + 1);

// Link that Connect the random no to the same dice image 
var link1 = "./images/dice" + p1 + ".png";
var link2 = "./images/dice" + p2 + ".png";

// Changing the images for both p1 & p2 
document.querySelector("#player1 img").setAttribute( "src" , link1);
document.querySelector("#player2 img").setAttribute( "src" , link2);

// Comparing P1 & P2 Scores
if (p1 > p2){
    document.querySelector("h1").textContent = player1 + " Wins 🌟";
} else if (p2 > p1){
    document.querySelector("h1").textContent = player2 + " Wins 🌟";
} else {
    document.querySelector("h1").textContent = " Tie 🐹";
}
}
function repeat(){
// Save Old Player Names 
var repeatedPlayer1 = default1.textContent;
var repeatedPlayer2 = default2.textContent;

// Random Numbers Generator for P1 & P2 
var p1 = Math.floor(( Math.random() *6 ) + 1);
var p2 = Math.floor(( Math.random() *6 ) + 1);

// Kiro / Kirolous Never Loses a Game of 3 Repeated Rolls
if(repeatedPlayer1.toLowerCase() == "kiro" || repeatedPlayer1.toLowerCase() == "kirolous"){
    while(p1 < p2){
        p1 = Math.floor(( Math.random() *6 ) + 1);
        p2 = Math.floor(( Math.random() *6 ) + 1);
    }
}else if (repeatedPlayer2.toLowerCase() == "kiro" || repeatedPlayer2.toLowerCase() == "kirolous"){
    while(p2 < p1){
        p1 = Math.floor(( Math.random() *6 ) + 1);
        p2 = Math.floor(( Math.random() *6 ) + 1);        
    }
}

// Link that Connect the random no to the same dice image 
var link1 = "./images/dice" + p1 + ".png";
var link2 = "./images/dice" + p2 + ".png";

// Changing the images for both p1 & p2 
document.querySelector("#player1 img").setAttribute( "src" , link1);
document.querySelector("#player2 img").setAttribute( "src" , link2);

// Comparing P1 & P2 Scores
if (p1 > p2){
    document.querySelector("h1").textContent = repeatedPlayer1 +  " Wins 🌟" ;
} else if (p2 > p1){
    document.querySelector("h1").textContent = repeatedPlayer2 +  " Wins 🌟" ;
} else {
    document.querySelector("h1").textContent = " Tie 🐹";
}
}