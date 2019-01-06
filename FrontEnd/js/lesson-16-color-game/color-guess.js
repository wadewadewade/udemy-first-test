// ************************************************************************
// Define the variables
// ************************************************************************

var numSquares = 6; // the difficulty
var colors = [] // set colors
var pickedColor; // pick a random color
var squares = document.querySelectorAll(".square"); // grab all the squares
var targetDisplay = document.getElementById("targetDisplay"); // set up target display
var messageDisplay = document.querySelector("#message"); // set up display for message
var resetButton = document.querySelector("#reset"); // select reset button
var modeButtons = document.querySelectorAll(".mode");

// ************************************************************************
// General setup
// ************************************************************************

init();

function init(){
    setupDifficultyButtons();
    setupSquares();
    resetButton.addEventListener("click",reset);
    reset();
};

// ************************************************************************
// Functions
// ************************************************************************

// set up difficulty buttons
function setupDifficultyButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click",function(){
            // classes
            modeButtons[0].classList.remove("selectedDifficulty");
            modeButtons[1].classList.remove("selectedDifficulty");
            this.classList.add("selectedDifficulty");

            // ternary operator;
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
            
        })
    };
};

// initial setup of squares
function setupSquares(){
    for(var i= 0; i < squares.length; i++){
        // add click listeners to squares
        squares[i].addEventListener("click",function(){
            // Update button text from "play again"
            resetButton.textContent = "New colors"

            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // compare color of square to clicked color
            if(clickedColor === pickedColor){
                correctGuess(this);
            }
            else {
                wrongGuess(this);
            }
        });
    }
};

// reset the game
function reset(){
    // Update button text from "play again"
    resetButton.textContent = "New colors"
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change color display to match picked color
    targetDisplay.textContent = pickedColor;
    // change color of squares on the page
    for(var i= 0; i < squares.length; i++){
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    };
    // Reset message
    messageDisplay.textContent = "";
    // Change header background
    document.querySelector("h1").style.backgroundColor = "steelblue";
    document.querySelector("h1").style.color = "white";
};

// pick a random color from the list
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

// if the guess is correct
function correctGuess(square) {
    // Update the message to show they won
    messageDisplay.textContent = "Correct";
    
    // change all the colors
    changeColors(pickedColor);

    // change button text
    resetButton.textContent = "Play again?"
};

// if the guess is wrong
function wrongGuess(square) {
    square.style.backgroundColor = "#232323";
    messageDisplay.textContent = "Try again";
};

// after correct guess, update square color and header color
function changeColors(color){
    // loop through squares
    for(var i = 0; i < squares.length; i++) {
        // change color
        squares[i].style.backgroundColor = color;
    }

    // also change header color
    document.querySelector("h1").style.backgroundColor = color;

    // and update the text color if needed
    if (lightOrDark(pickedColor) === "light") {
        document.querySelector("h1").style.color = "black";
    }
};

// generate the starting colors
function generateRandomColors(num) {
    // make an array
    var arr = [];
    
    // add [num] random colors to array
    for(var i = 0; i < num; i++){
        // get random color and push into array
        arr.push(randomColor());
    }
    
    // return array
    return arr;
};

// generate a single random RGB color
function randomColor(){
    // pick "red" from 0 to 255
    var r = Math.floor(Math.random() * 256);
    // pick "green" from 0 to 255
    var g = Math.floor(Math.random() * 256);
    // pick "blue" from 0 to 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
};

// check if the background is light or dark, to display header appropriately
// from https://awik.io/determine-color-bright-dark-using-javascript/
function lightOrDark(color) {

    // Variables for red, green, blue values
    var r, g, b, hsp;
    
    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {

        // If HEX --> store the red, green, blue values in separate variables
        color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
        
        r = color[1];
        g = color[2];
        b = color[3];
    } 
    else {
        
        // If RGB --> Convert it to HEX: http://gist.github.com/983661
        color = +("0x" + color.slice(1).replace( 
        color.length < 5 && /./g, '$&$&'));

        r = color >> 16;
        g = color >> 8 & 255;
        b = color & 255;
    }
    
    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
    0.299 * (r * r) +
    0.587 * (g * g) +
    0.114 * (b * b)
    );

    // Using the HSP value, determine whether the color is light or dark
    if (hsp>127.5) {

        return 'light';
    } 
    else {

        return 'dark';
    }
}