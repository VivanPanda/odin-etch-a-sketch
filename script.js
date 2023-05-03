// Declare Variables

let gridContainer = document.querySelector('.grid-container');
let slider = document.querySelector('.slider');
let colorPicker = document.querySelector('#color-picker');
let gridBoxes;
let cellHeight;
let cellWidth;
let outputValue;
let flexBasisValue;
let gridBoxCreation;
let gridHeight = 480;
let gridWidth = 480;

const blackButton = document.querySelector('.color-black');
const eraserButton = document.querySelector('.eraser');
const resetButton = document.querySelector('.reset');
const menuButtons = document.querySelector('.menu-button')
const output = document.querySelector(".value");


// Change output value next to slider text

outputValue = parseInt(output.innerHTML);
output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
}

// Function to create the grid

function createGrid (side) {
    for (let i = 0; i < (side * side); i++) {
        gridBoxCreation = document.createElement('div');
        gridBoxCreation.classList.add("grid-box");
        gridContainer.appendChild(gridBoxCreation);
    }
} 

// Function to make the grid cells black

function makeColorBlack() {
    let gridBoxes = document.querySelectorAll('.grid-box');
    for (let j = 0; j < (gridBoxes.length); j++) {
        gridBoxes[j].addEventListener('mouseover', () => {
            gridBoxes[j].classList.add('black');
        })
    };
}

// Get color picker value

let colorValue = colorPicker.value;

colorPicker.addEventListener('input', () => {
    colorValue = colorPicker.value;
    console.log(colorValue)
})

// Function to erase grid cells - make the grid cells white

function erase() {
    let gridBoxes = document.querySelectorAll('.grid-box');
    for (let k = 0; k < (gridBoxes.length); k++) {
        gridBoxes[k].addEventListener('mouseover', () => {
            gridBoxes[k].classList.add('erase');
        })
    };
}

// Event listener for the changing of the slider

 slider.addEventListener("change", () => {
    outputValue = slider.value;
    gridContainer.innerHTML = '';
    createGrid(outputValue);
    gridBoxes = document.querySelectorAll('.grid-box');
    cellHeight = (gridHeight/outputValue);
    cellWidth = (gridHeight/outputValue);
    flexBasisValue = ((1 / outputValue) * 100);
    flexBasisValue = `${flexBasisValue}%`
    for (let a = 0; a < (gridBoxes.length); a++) {
        gridBoxes[a].style.height = `${cellHeight}px`;
        gridBoxes[a].style.width = `${cellWidth}px`;    
        gridBoxes[a].style.flexBasis = flexBasisValue;
    }
    makeColorBlack();
 })


createGrid(16);
makeColorBlack();
