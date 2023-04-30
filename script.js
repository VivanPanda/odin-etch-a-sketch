let gridContainer = document.querySelector('.grid-container');
const blackButton = document.querySelector('.color-black');
const eraserButton = document.querySelector('.eraser');
const resetButton = document.querySelector('.reset');
const menuButtons = document.querySelector('.menu-button')
let slider = document.querySelector('.slider');
const output = document.querySelector(".value");
let gridBox = document.querySelectorAll('.grid-box');
let gridHeight = 500;
let gridWidth = 500;
let cellHeight;
let cellWidth;

output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
}

function createGrid (rows, cols) {
    for (let i = 0; i < (rows * cols); i++) {
        let gridBoxCreation = document.createElement('div');
        gridBoxCreation.classList.add("grid-box");
        gridContainer.appendChild(gridBoxCreation);
    }
}

 slider.addEventListener("change", () => {
     cellHeight = (gridHeight / output.innerHTML);
     cellWidth = (gridHeight / output.innerHTML);
     for (let a = 0; a < (gridBox.length); a++) {
         gridBox[a].style.height = cellHeight;
         gridBox[a].style.width =  cellWidth;
     }
 })

function makeColorBlack() {
    let gridBox = document.querySelectorAll('.grid-box');
    for (let j = 0; j < (gridBox.length); j++) {
        gridBox[j].addEventListener('mouseover', () => {
            gridBox[j].classList.add('black');
        })
    };
}

function erase() {
    let gridBox = document.querySelectorAll('.grid-box');
    for (let k = 0; k < (gridBox.length); k++) {
        gridBox[k].addEventListener('mouseover', () => {
            gridBox[k].classList.add('erase');
        })
    };
}



createGrid(16,16);
makeColorBlack();
