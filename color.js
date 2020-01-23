var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {
    setUpColors();
    setUpSquare();
    reset();
}

function setUpColors(){
    //modeButtons event listeners
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setUpSquare() {
    for (var i = 0; i < squares.length; i++) {
        //ass click listeners to squares
        squares[i].addEventListener("click", function () {
            //grab color of pick color
            var clickedColor = this.style.backgroundColor;
            //compare color to prickedcolor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}


function reset() {
    //generate new colors
    colors = generateRandomColors(numSquares);
    //pick new random color fron array
    pickedColor = pickColor();
    // change colorDisplay to match pick
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    //change colors of square
    for (i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function () {
    reset();
})

function changeColors(color) {
    //loop through all square

    for (var i = 0; i < squares.length; i++) {

        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    //pick a random color
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = []

    //add num random colors to array

    for (var i = 0; i < num; i++) {
        //get random color and push tu array
        arr.push(randomColor())
    }

    //return array
    return arr;
}

function randomColor() {
    // pick a red form 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a blue form 0 - 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

}