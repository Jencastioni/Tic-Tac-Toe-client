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
module.exports = {
    onCreateGame,
    onGameIndex,
  }