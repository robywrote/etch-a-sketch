'use strict'

const gridDimension = 2
const gridSquares = gridDimension * gridDimension

for (let i=0; i < gridSquares; i++) {
    const gridContainer = document.getElementById('grid-container')
    const newDiv = document.createElement('div')
    newDiv.classList.add('item')
    newDiv.addEventListener('mouseover', doOnMouseover)
    gridContainer.appendChild(newDiv)
}

function doOnMouseover(e) {
    const item = e.target
    item.classList.add('hover')
  }

