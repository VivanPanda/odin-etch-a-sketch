gridContainer = document.querySelector('.grid-container');

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

createGrid(16,16);
makeColorBlack();
