// Declare Variables

let gridContainer = document.querySelector('.grid-container');
let slider = document.querySelector('.slider');
let gridBoxes;
let gridHeight = 500;
let gridWidth = 500;
let cellHeight;
let cellWidth;
let outputValue;
let flexBasisValue;
let gridBoxCreation;

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

function createGrid (side) {
    for (let i = 0; i < (side * side); i++) {
        gridBoxCreation = document.createElement('div');
        gridBoxCreation.classList.add("grid-box");
        gridContainer.appendChild(gridBoxCreation);
    }
} 

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
 })

// Function to make the grid cells black

function makeColorBlack() {
    let gridBoxes = document.querySelectorAll('.grid-box');
    for (let j = 0; j < (gridBoxes.length); j++) {
        gridBoxes[j].addEventListener('mouseover', () => {
            gridBoxes[j].classList.add('black');
        })
    };
}

// Function to erase grid cells - make the grid cells white

function erase() {
    let gridBoxes = document.querySelectorAll('.grid-box');
    for (let k = 0; k < (gridBoxes.length); k++) {
        gridBoxes[k].addEventListener('mouseover', () => {
            gridBoxes[k].classList.add('erase');
        })
    };
}

createGrid(16);
makeColorBlack();
