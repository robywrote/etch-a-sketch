'use strict'

const button = document.querySelector('button')
button.addEventListener('click', doOnClick)

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

function doOnMouseover(e) {
    const item = e.target
    item.classList.remove('item')
    item.classList.add('hover')
}

function doOnClick(e) {
    removeGrid()
    let gridDimension = prompt('How many grid columns do you want?')
    let gridSquares = gridDimension * gridDimension
    buildGrid(gridSquares)
  }


