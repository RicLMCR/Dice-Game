// VARIABLES 
const btn1 = document.getElementById("player1Btn"); //Player 1 Button
const btn2 = document.getElementById("player2Btn"); //Player 2 Button
const diceResult = document.getElementById("diceRoll")//Dice roll Result
// const playerTurn = document.getElementById("playerTurn")// Player turn indicator
// const gameTurn = document.getElementById("gameTurn")// Game turn indicator
const p1Tscore = document.getElementById("totalScore1") //Player 1  Total Score header
const p2Tscore = document.getElementById("totalScore2") //Player 2  Total Score header

let p1TotalScore = 0;//Player 1 total score value
let p2TotalScore = 0;//Player 2 total score value
let p1 = 0; //True/False value to determine which player is rolling the dice
// let gTurnCount = 0;//Game turn counter

//PLAYER 1 BUTTON FUNCTION
function p1Btn(p1Tscore) {
    //True attributes scoreGen result to player1
    p1 = 1;

    //Calls on scoreGen function to create a random number for player
    scoreGen()

    //Calls on PlayerTurn function - set to Player 1
    // pTurn(1,0)

    //Display results to HTML
    if (p1 == 1) {
        diceResult.textContent = diceRoll;
        p1TotalScore += diceRoll;
        p1Tscore.textContent = p1TotalScore;
        console.log(p1Tscore.textContent)
    }
    //Winner Notice
    if (p1TotalScore >= 20) {
        p1Tscore.textContent = "You win!" //Activate winner function
        console.log("P1 Wins")
    }
}

//PLAYER 2 BUTTON FUNCTION
function p2Btn(p2Tscore) {
    // False attributes scoreGen result to player2
    p1 = 0; //

    //Calls on scoreGen function to create a random number for player
    scoreGen()

    //Calls on playerTurn function - set to Player 1
    // pTurn(0,1)

    //Display results to HTML
    if (p1 == 0) {
        diceResult.textContent = diceRoll; 
        p2TotalScore += diceRoll;
        p2Tscore.textContent = p2TotalScore;
        console.log(p2Tscore.textContent)
    }
    //Winner Notice
    if (p2TotalScore >= 20) {
        p2Tscore.textContent = "You win!" //Activate winner function
        console.log("P2 Wins")
    }
}




// If 1 player game selected then player 1 will have to activate function for auto player 2
//AI PLAYER 2 TURN
// function p2Ai(p2Score){
// }

// //PLAYER TURN INDICATOR
// function pTurn (p1,p2){
//     if ((p1 == 0 && p2 == 0) || (p1 == 1 && p2 == 1)){
//         playerTurn.textContent = "Start The Next Round";
//     }
//     else if (p1 == 1 && p2 == 0){
//         console.log("P2 Turn")
//         playerTurn.textContent = "Player 2 Turn";
// //insert HTML including CSS ID for P1 turn
//     }
//     else if(p1 == 0 && p2 == 1){
//         console.log("P1 Turn")
//         playerTurn.textContent = "Player 1 Turn";
//insert HTML including CSS ID for P1 turn
//     }
// }

// GAME TURN INDICATOR -- NOT WORKING!!! 
// function gTurn (p1,p2){
//     if (p1 == 1 && p2 == 0){
//         let gTurnCount = 1;
//         gTurnCount += 1;
//         gameTurn.textContent = gTurnCount;
//     }
    // if var result is even the gTurnCount +=
// }

// // STOP SAME PLAYER FROM PLAYING TWICE
// function noCheat (){
// }

//RANDOM NUMBER GENERATOR (DICE ROLL)
function scoreGen() {
    diceRoll = Math.floor(Math.random() * 6 + 1);
    const diceImage = 'images/dice' + diceRoll + '.png';
    document.getElementById("diceImg").setAttribute("src", diceImage)
    if (diceRoll == 1) {
        diceRoll = "You rolled a 1. Game over!" //Activate Winner function for opposing player
    }
}

//EVENT LISTENERS FOR P1 AND P2 BUTTONS
btn1.addEventListener("click", p1Btn) //Two argments within the parenthisis. The first is the event youve chosen as trigger. the second is the function you will call on when button is pressed
btn2.addEventListener("click", p2Btn) //Two argments within the parenthisis. The first is the event youve chosen as trigger. the second is the function you will call on when button is pressed

//'you rolled a:'
//push central number
//change button
// 1 player version
// reset game function
//player turn indicator + account for roll of one for opposing player
//game turn counter
//winner award function + screen or use innerHtml to replace section of screen

// intro screen 1 or 2 player