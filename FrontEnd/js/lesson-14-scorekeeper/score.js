// select elements
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input[type='number']");
var targetDisplay = document.querySelector("#targetDisplay");

// set variables
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var targetScore = 5;

// Player 1 button clicked
p1Button.addEventListener("click", function() {
    if(!gameOver){
        p1Score++;
        checkWin(p1Score); 
        // this bit below is what I don't know how to refactor yet
        if(p1Score === targetScore) {
            p1Display.classList.add("win");
        }
    }
    p1Display.textContent = p1Score;
});

// Player 2 button clicked
p2Button.addEventListener("click", function() {
    if(!gameOver){
        p2Score++;
        checkWin(p2Score); 
    }
    p2Display.textContent = p2Score;
});

// Reset button clicked
resetButton.addEventListener("click", resetScores);

// Target score changed via input box
numInput.addEventListener("change", function() {
    targetDisplay.textContent = this.value;
    targetScore = Number(this.value);
    resetScores();
})

// Checks if player has won
function checkWin(score) {
    if(score === targetScore) {
        console.log("WIN");
        gameOver = true;
        return true
    }
};

// Resets the scores
function resetScores() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("win");
    p2Display.classList.remove("win");
    gameOver = false;
};