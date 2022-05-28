'use strict'

const newButton = document.querySelector('#new-grid')
newButton.addEventListener('click', newGrid)

const clearButton = document.querySelector('#clear-grid')
clearButton.addEventListener('click', clearGrid)

const colors = ['darkcyan', 'cornflowerblue', 'lightseagreen', 'orange']

function pickColor(max) {
    return colors[Math.floor(Math.random() * max)]
}

function buildGrid(squares) {
    for (let i=0; i < squares; i++) {
        const gridContainer = document.getElementById('grid-container')
        const newDiv = document.createElement('div')
        newDiv.classList.add('item')
        newDiv.addEventListener('mouseover', doOnMouseover)
        gridContainer.appendChild(newDiv)
    }
}

function removeGrid() {
    let items = document.querySelectorAll('.item')
    let hovers = document.querySelectorAll('.hover')

    items.forEach(e => e.remove())
    hovers.forEach(e => e.remove())
}

function clearGrid() {
    let hovers = document.querySelectorAll('.hover')
    hovers.forEach(e => { 
        e.style.background = 'lightgray'
        e.classList.remove('hover')
        e.classList.add('item')
    })
}

function doOnMouseover(e) {
    const item = e.target
    item.style.background = pickColor(colors.length)
    item.classList.remove('item')
    item.classList.add('hover')
}

function newGrid(e) {
    let gridSquares = prompt('How many grid squares do you want?')
    if (gridSquares === null) {
        return //break out of the function early
    }
    removeGrid()
    buildGrid(gridSquares)
  }


