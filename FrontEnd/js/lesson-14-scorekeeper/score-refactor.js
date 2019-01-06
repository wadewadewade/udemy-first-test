// DEFINE EVERYTHING
//////////////////////////////////////

// select elements
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input[type='number']");
var targetDisplay = document.querySelector("#targetDisplay");
var winnerDisplay = document.querySelector("#winnerDisplay");

// set variables
var gameOver = false;
var targetScore = 5;

// set players as the objects
var playerOne = {
    score: 0,
    display: document.querySelector("#p1Display"),
    button: document.querySelector("#p1"),
    name: "Chris"
};

var playerTwo = {
    score: 0,
    display: document.querySelector("#p2Display"),
    button: document.querySelector("#p2"),
    name: "Lisa"
};

// EVENT LISTENERS
//////////////////////////////////////

// Player 1 button clicked
p1Button.addEventListener("click", function() {
    plusOne(playerOne);
});

// Player 2 button clicked
p2Button.addEventListener("click", function() {
    plusOne(playerTwo);
});

// Reset button clicked
resetButton.addEventListener("click", resetScores);

// Target score changed via input box
numInput.addEventListener("change", function() {
    targetDisplay.textContent = this.value;
    targetScore = Number(this.value);
    resetScores();
})

// FUNCTIONS
//////////////////////////////////////

// adds one to the score and checks if they win
function plusOne(player) {
    // if the game's still active
    if(!gameOver){
        player.score++; // adds to the score
        player.display.textContent = player.score; // updates the display

        // checks if they've won
        if(player.score === targetScore) {
            // and if they have...
            celebrate(player);
            gameOver = true; // ends the game
        }
    }
};

// Resets the scores
function resetScores() {
    reset(playerOne);
    reset(playerTwo);
    gameOver = false;
};

// Resets each individually
function reset(player) {
    player.score = 0;
    player.display.textContent = player.score;
    player.display.classList.remove("win");
    winnerDisplay.textContent = ""; // clear the winner display paragraph

}

// How to celebrate the win
function celebrate(player) {
    player.display.classList.add("win"); // adds the class to the score
    winnerDisplay.textContent = player.name + " has won!"; // displays it in the box below
}