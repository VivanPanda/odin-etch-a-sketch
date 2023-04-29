const gridContainer = document.querySelector('.grid-container');
const blackButton = document.getElementsByClassName('color-black');
const eraserButton = document.getElementsByClassName('eraser');
const resetButton = document.getElementsByClassName('reset');
const menuButtons = document.getElementsByClassName('menu-button')



function createGrid (rows, cols) {
    for (let i = 0; i < (rows * cols); i++) {
        let gridBoxCreation = document.createElement('div');
        gridBoxCreation.classList.add("grid-box");
        gridContainer.appendChild(gridBoxCreation);
    }
}

function makeColorBlack() {
    const gridBox = document.querySelectorAll('.grid-box');
    for (let j = 0; j < (gridBox.length); j++) {
        gridBox[j].addEventListener('mouseover', () => {
            gridBox[j].classList.add('black');
        })
    };
}

function erase() {
    const gridBox = document.querySelectorAll('.grid-box');
    for (let k = 0; k < (gridBox.length); k++) {
        gridBox[k].addEventListener('mouseover', () => {
            gridBox[k].classList.add('erase');
        })
    };
}

createGrid(16,16);
makeColorBlack();
