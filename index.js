'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

import 'bootstrap'

// allows usage of new JS features
require('babel-polyfill')

// load manifests
// scripts
require('./assets/scripts/app.js')

// styles
require('./assets/styles/index.scss')


// const winCombo = [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9],
// [1, 4, 7],
// [2, 5, 8],
// [3, 6, 9],
// [1, 5, 9],
// [3, 5, 7]
// ]

// const cellElements = document.querySelectorAll('[data-cell]')
// const board = document.getElementById('board')
// const endMessageElement = document.getElementById('endMessage')
// const replayButton = document.getElementById('replayButton')
// const endMessageTextElement = document.querySelector('[data-end-message-text]')
// let circleTurn

// startGame()

// replayButton.addEventListener('click', startGame)

// function startGame() {
//   circleTurn = false
//   cellElements.forEach(cell => {
//     cell.classList.remove(playerX)
//     cell.classList.remove(playerO)
//     cell.removeEventListener('click', clickHandle)
//     cell.addEventListener('click', clickHandle, { once: true })
//   })
//   setBoardHoverClass()
//   endMessageElement.classList.remove('show')
// }



// const cell = event.target
// const currentClass = currentPlayer ? "O" : "X"
// placeMark(cell, currentClass)
// if (checkWin(currentClass)) {
//   endGame(false)
// } else if (isDraw()) {
//   endGame(true)
// } else {
//   swapTurns()
//   setBoardHoverClass()
// }
// }
// function endGame(draw) {
// if (draw) {
//   endMessageTextElement.innerText = 'Draw!'
// } else {
//   endMessageTextElement.innerText = `${currentPlayer ? "O" : "X"} Wins!`
// }
//   endMessageElement.classList.add('show')
// }

// function isDraw() {
// return [...cellElements].every(cell => {
//   return cell.classList.contains(playerX) || cell.classList.contains(playerO)
// })
// }
// function checkWin(currentClass) {
// return winCombo.some(combo => {
//   return combo.every(index => {
//     return cellElements[index].classList.contains(currentClass)
//   })
// })
// }