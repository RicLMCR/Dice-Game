// VARIABLES 
const onePlayer = document.getElementById("noOfPlayers1") //1 player button
const twoPlayer = document.getElementById("noOfPlayers2") //2 player button
const btn1 = document.getElementById("player1Btn"); //Player 1 Button
const btn2 = document.getElementById("player2Btn"); //Player 2 Button
const diceResult = document.getElementById("diceRoll") //Dice roll Result
const p1Tscore = document.getElementById("totalScore1") //Player 1  Total Score header
const p2Tscore = document.getElementById("totalScore2") //Player 2  Total Score header
const playerTurn = document.getElementById("playerTurn")

let p1TotalScore = 0; //Player 1 total score value
let p2TotalScore = 0; //Player 2 total score value

let hide1 = document.getElementById("player1"); //Hide opposite player
let hide2 = document.getElementById("player2"); //Hide opposite player

const btn3 = document.getElementById("player1Hld"); //Player 1 hold turn button
const btn4 = document.getElementById("player2Hld"); //Player 2 hold turn button

let noOfPlayers = 0; //Determines number of players in game
let p1 = 0; //True/False value to determine which player is rolling the dice


// //REFRESH BUTTON
function refreshBtn() {
    window.location.reload();
    console.log("refresh")
}

//ONE PLAYER GAME
function playerNum1() {
    noOfPlayers = 0;
    hideP2()
}

//TWO PLAYER GAME
function playerNum2() {
    noOfPlayers = 1;
}

//PLAYER 1 TURN INDICATOR
function p1Turn() {
    playerTurn.innerHTML = 'Player 1 Turn';
}

//PLAYER 2 TURN INDICATOR
function p2Turn() {
    playerTurn.innerHTML = 'Player 2 Turn';
}

//HIDE PLAYER 1 BUTTON AND SHOW P2 BUTTON
function hideP1() {
    if (hide1.style.display === "none") {
        hide1.style.display = "flex";
    } else {
        hide1.style.display = "none";
    }
    hide2.style.display = "flex";
}

//HIDE PLAYER 2 BUTTON AND SHOW P1 BUTTON
function hideP2() {
    if (hide2.style.display === "none") {
        hide2.style.display = "flex";
    } else {
        hide2.style.display = "none";
    }
    hide1.style.display = "flex";
}

//PLAYER 1 TURN BUTTON FUNCTION
function p1Btn() {
    //True attributes scoreGen result to player1
    p1 = 1;
    //Calls on player 2 turn indicator
    p2Turn()
    //Hide button after turn is taken
    hideP1()
    //Calls on scoreGen function to create a random number for player
    scoreGen()
    //Display results to HTML and winner Notice
    if (p1 == 1 && diceRoll != 1) {
        diceResult.textContent = diceRoll; //Inject diceroll 1 prompt here???????
        p1TotalScore += diceRoll;
        p1Tscore.textContent = p1TotalScore;
        console.log(`p1 ${p1Tscore.textContent}`)

        if (p1TotalScore >= 20) {
            p1Tscore.textContent = "You win!";
            diceResult.textContent = "Player 1 Wins!";
            console.log("P1 Wins")
        }
    } else {
        p1Tscore.textContent = "Player 1 rolled a 1! You 1 lose.";
        hide1.style.display = "none";
        hide2.style.display = "none";
    }

    //Check to see if 1 player game or 2 player game and action automated player 2 function if required
    if (noOfPlayers == 0) {
        p2Btn(p2Tscore)
        console.log("no of players 1")
    }
}

//PLAYER 2 TURN BUTTON FUNCTION
function p2Btn() {
    // False attributes scoreGen result to player2
    p1 = 0;
    //Calls on player 2 turn indicator
    p1Turn()
    //Hide button after turn is taken
    hideP2()
    //Calls on scoreGen function to create a random number for player
    scoreGen()
    //Display results to HTML and winner Notice
    if (p1 == 0 && diceRoll != 1) {
        diceResult.textContent = diceRoll; //Inject diceroll 1 prompt here???????
        p2TotalScore += diceRoll; //How to change to factor in the prompt when a 1 is orlled
        p2Tscore.textContent = p2TotalScore;
        console.log(`p2 ${p2Tscore.textContent}`)

        if (p2TotalScore >= 20) {
            p2Tscore.textContent = "You win!";
            diceResult.textContent = "Player 2 Wins!";
            console.log("P2 Wins")
        }
    } else {
        p2Tscore.textContent = "Player 2 rolled a 1! You 2 lose.";
        hide1.style.display = "none";
        hide2.style.display = "none";
    }
}


//PLAYER 1 HOLD FUNCTION
function p1Hold() {
    // 1 Player game only
    if (noOfPlayers == 0) {
        p2Btn();
        p2Turn()
        hide2.style.display = "none";
        console.log("P1 holds");
    } else {
        //Calls on player 2 turn indicator
        p2Turn()
        hideP1()
        //Hide button after turn is taken
    }
}

//PLAYER 2 HOLD FUNCTION (2 PLAYER GAME ONLY)
function p2Hold() {
    //Calls on player 2 turn indicator
    p1Turn()
    //Hide button after turn is taken
    hideP2()
}

//RANDOM NUMBER GENERATOR (DICE ROLL) - ALERTS PLAYER IF '1' IS ROLLED
function scoreGen() {
    diceRoll = Math.floor(Math.random() * 6 + 1);
    const diceImage = 'images/dice' + diceRoll + '.png';
    document.getElementById("diceImg").setAttribute("src", diceImage)
    // if (diceRoll == 1) {
    //     diceRoll = "You rolled a 1. Game over!" //Activate Winner function for opposing player
    // }
}

onePlayer.addEventListener("click", playerNum1) // One player game button
twoPlayer.addEventListener("click", playerNum2) // Two player game button

//EVENT LISTENERS FOR P1 AND P2 BUTTONS
btn1.addEventListener("click", p1Btn) //Two argments within the parenthisis. The first is the event youve chosen as trigger. the second is the function you will call on when button is pressed
btn2.addEventListener("click", p2Btn) //Two argments within the parenthisis. The first is the event youve chosen as trigger. the second is the function you will call on when button is pressed

btn3.addEventListener("click", p1Hold) //Player 1 hold button
btn4.addEventListener("click", p2Hold) //Player 2 hold button