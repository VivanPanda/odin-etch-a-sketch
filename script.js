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
let randomColorValue;
let gridHeight = 480;
let gridWidth = 480;

const colorButton = document.querySelector('.color-button');
const eraserButton = document.querySelector('.eraser');
const rainbowButton = document.querySelector('.rainbow');
const shadingButton = document.querySelector('.shading');
const resetButton = document.querySelector('.reset');
const menuButtons = document.querySelector('.menu-button')
const output = document.querySelector(".value");

// Make the color button enabled at the start

window.onload = function() {
    colorButton.classList.add('button-focus');
}

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

// Function to make grid cells black

function makeColorBlack() {
    let gridBoxes = document.querySelectorAll('.grid-box');
    for (let j = 0; j < (gridBoxes.length); j++) {
        gridBoxes[j].addEventListener('mouseover', () => {
            gridBoxes[j].classList.add('black');
        })
    };
}

// Change according to color picker value

colorPicker.addEventListener('input', () => {
    colorValue = colorPicker.value;
    let gridBoxes = document.querySelectorAll('.grid-box');
    for (let b = 0; b < (gridBoxes.length); b++) {
        gridBoxes[b].addEventListener('mouseover', () => {
            gridBoxes[b].style.backgroundColor = colorValue;
        })
    };
})

let colorValue = colorPicker.value;

// Function to erase grid cells - make the grid cells white

function erase() {
    let gridBoxes = document.querySelectorAll('.grid-box');
    for (let k = 0; k < (gridBoxes.length); k++) {
        gridBoxes[k].addEventListener('mouseover', () => {
            gridBoxes[k].classList.remove('black');
            gridBoxes[k].style.backgroundColor = 'white';
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

    let colorValue = colorPicker.value;

    for (let b = 0; b < (gridBoxes.length); b++) {
        gridBoxes[b].addEventListener('mouseover', () => {
            gridBoxes[b].style.backgroundColor = colorValue;
        })
    };

    colorPicker.addEventListener('input', () => {
        colorValue = colorPicker.value;
        let gridBoxes = document.querySelectorAll('.grid-box');
        for (let b = 0; b < (gridBoxes.length); b++) {
            gridBoxes[b].addEventListener('mouseover', () => {
                gridBoxes[b].style.backgroundColor = colorValue;
            })
        };
    })
    
 })

colorPicker.addEventListener('click', () => {
    colorButton.classList.add('button-focus');
    eraserButton.classList.remove('button-focus');
})

colorButton.addEventListener('click', () => { 

    // Change selected button css
    
    colorButton.classList.add('button-focus');
    eraserButton.classList.remove('button-focus');
    rainbowButton.classList.remove('button-focus');
    shadingButton.classList.remove('button-focus');

    let colorValue = '#000000'; 
    colorValue = colorPicker.value;
    let gridBoxes = document.querySelectorAll('.grid-box');
    for (let b = 0; b < (gridBoxes.length); b++) {
        gridBoxes[b].addEventListener('mouseover', () => {
            gridBoxes[b].style.backgroundColor = colorValue;
        })
    };
})
 
eraserButton.addEventListener('click', () => {

    // Change selected button css

    eraserButton.classList.add('button-focus');
    colorButton.classList.remove('button-focus');
    rainbowButton.classList.remove('button-focus');
    shadingButton.classList.remove('button-focus');

    erase();
    eraserButton.removeEventListener('click', eraserButton);
})

rainbowButton.addEventListener('click', () => {

    // Change selected button css

    rainbowButton.classList.add('button-focus');
    colorButton.classList.remove('button-focus');
    eraserButton.classList.remove('button-focus');
    shadingButton.classList.remove('button-focus');

    let gridBoxes = document.querySelectorAll('.grid-box');

    // get random hex code

    randomColorValue = Math.floor(Math.random()*16777215).toString(16);
    randomColorValue = `#${randomColorValue}`;

    for (let b = 0; b < (gridBoxes.length); b++) {
        gridBoxes[b].addEventListener('mouseover', () => {
            randomColorValue = Math.floor(Math.random()*16777215).toString(16);
            randomColorValue = `#${randomColorValue}`;
            gridBoxes[b].style.backgroundColor = randomColorValue;
        })
    };
})

shadingButton.addEventListener('click', () => {
    
    // Change selected button css

    shadingButton.classList.add('button-focus');
    colorButton.classList.remove('button-focus');
    eraserButton.classList.remove('button-focus');
    rainbowButton.classList.remove('button-focus')
})


// Make Reset Button

resetButton.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    createGrid(16);
    makeColorBlack();
})

createGrid(16);
makeColorBlack();
