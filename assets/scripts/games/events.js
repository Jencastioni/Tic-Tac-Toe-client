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
module.exports = {
    onCreateGame,
    onGameIndex,
    onGameShow,
    onGameUpdate
  }