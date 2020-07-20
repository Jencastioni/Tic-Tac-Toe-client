'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')


const onCreateGame = function (event) {
    event.preventDefault()

    const form = event.target
    const formData = getFormFields(form)

    api.createGame(formData)
      .then(ui.newCreateSuccess)
      .catch(ui.newCreateFailure)
  }

  const onGameIndex = function (event) {
    api.gameIndex()
      .then(ui.gameIndexSuccess)
      .catch(ui.gameIndexFailure)
  }

  const onGameShow = function (event) {
    event.preventDefault()
  
    const form = event.target
    const formData = getFormFields(form)
    api.gameShow(formData.game.id)
      .then(ui.showGameSuccess)
      .catch(ui.showGameFailure)
  }

  const onGameUpdate = function (event) {
    event.preventDefault()

    const form = event.target
    const formData = getFormFields(form)

    api.gameUpdate(formData)
        .then(ui.updategameSuccess)
        .catch(ui.updategameFailure)
  }

  const winCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  // set array = by index not by #
  
  const cellElements = document.querySelectorAll('[data-cell]')
  const board = document.getElementById('board')
  const endMessageElement = document.getElementById('endMessage')
  const replayButton = document.getElementById('replyButton')
  const endMessageTextElement = document.querySelector('[data-end-message-text]')

  const onPlayGame = function () {
    cellElements.forEach(cell => {
    cell.classList.remove(currentPlayer)
    cell.removeEventListener('click', clickHandler)
    cell.addEventListener('click', clickHandler, { once: true })
    console.log('clicked')
  })
  setBoardHoverClass()
  endMessageElement.classList.remove('show')
  }


  const onCellClick = function (event) {
    $(event.target).text(currentPlayer)
    if (currentPlayer === "X") {
      currentPlayer = "O"
    } else if (currentPlayer === "O") {
      currentPlayer = "X"
    }
  } 
  // use event.target to single out specific cell when clicked for "X"
  // use conditions to differentiate between x & o later

  let currentPlayer = "X"

  function handleClick(event) {
    const cell = event.target
    const currentClass = currentPlayer ? "O" : "X"
    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {
      endGame(false)
    } else if (isDraw()) {
      endGame(true)
    } else {
      swapTurns()
      setBoardHoverClass()
    }
  }
  function endGame(draw) {
    if (draw) {
      endMessageTextElement.innerText = 'Draw!'
    } else {
      endMessageTextElement.innerText = `${currentPlayer ? "O" : "X"} Wins!`
    }
      endMessageElement.classList.add('show')
  }
  
  function isDraw() {
    return [...cellElements].every(cell => {
      return cell.classList.contains(playerX) || cell.classList.contains(playerO)
    })
  }
  function checkWin(currentClass) {
    return winCombo.some(combo => {
      return combo.every(index => {
        return cellElements[index].classList.contains(currentClass)
      })
    })
  }

module.exports = {
    onCreateGame,
    onGameIndex,
    onGameShow,
    onGameUpdate,
    onPlayGame,
    onCellClick,
    endGame,
    isDraw,
    board,
    replayButton,
    endMessageTextElement,
    checkWin,
    winCombo,
    handleClick
}