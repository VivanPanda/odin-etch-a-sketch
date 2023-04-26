gridContainer = document.querySelector('.grid-container');

function createGrid (rows, cols) {
    for (let i = 0; i < (rows * cols); i++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add("grid-box");
        gridContainer.appendChild(gridBox);
    }
}

createGrid(16,16)