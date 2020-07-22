'use strict'

const store = require('../store')
const api = require('./api')
const ui = require('./ui')


const onCreateGame = function (event) {
    event.preventDefault()
    api.createGame()
      .then(ui.createGameSuccess)
      .catch(ui.createGameFailure)
}

const onReplayGame = function (event) {
    event.preventDefault()
    api.replayGame()
      .then(ui.replayGameSuccess)
      .catch(ui.replayGameFailure)
}

const onGamesPlayed = function (event) {
    event.preventDefault()
    api.gamesPlayed()
        .then(ui.gamesPlayedSuccess)
        .catch(ui.gamesPlayedFailure)
}
 
const onTL = function () {
  event.preventDefault()
  if ($(".TL").text() === "") {
    api.value()
    api.TL()
      .then(ui.TLSuccess)
      .catch(ui.TLFailure)
  } else {
    $("#message").text("Invalid Move")
  }
}

const onTM = function () {
  event.preventDefault()
  if ($(".TM").text() === "") {
    api.value()
    api.TM()
      .then(ui.TMSuccess)
      .catch(ui.TMFailure)
  } else {
    $("#message").text("Nope")
  }
}

const onTR = function () {
  event.preventDefault()
  if ($(".TR").text() === "") {
    api.value()
    api.TR()
      .then(ui.TRSuccess)
      .catch(ui.TRFailure)
  } else {
    $("#message").text("I don't think so")
  }
}

const onML = function () {
  event.preventDefault()
  if ($(".ML").text() === "") {
    api.value()
    api.ML()
      .then(ui.MLSuccess)
      .catch(ui.MLFailure)
  } else {
    $("#message").text("No dice")
  }
}

const onMM = function () {
  event.preventDefault()
  if ($(".MM").text() === "") {
    api.value()
    api.MM()
      .then(ui.MMSuccess)
      .catch(ui.MMFailure)
  } else {
    $("#message").text("Not here")
  }
}

const onMR = function () {
  event.preventDefault()
  if ($(".MR").text() === "") {
    api.value()
    api.MR()
      .then(ui.MRSuccess)
      .catch(ui.MRFailure)
  } else {
    $("#message").text("Can't do it")
  }
}

const onBL = function () {
  event.preventDefault()
  if ($(".BL").text() === "") {
    api.value()
    api.BL()
      .then(ui.BLSuccess)
      .catch(ui.BLFailure)
  } else {
    $("#message").text("Try Again")
  }
}

const onBM = function () {
  event.preventDefault()
  if ($(".BM").text() === "") {
    api.value()
    api.BM()
      .then(ui.BMSuccess)
      .catch(ui.BMFailure)
  } else {
    $("#message").text("The position has been filled")
  }
}

const onBR = function () {
  event.preventDefault()
  if ($(".BR").text() === "") {
    api.value()
    api.BR()
      .then(ui.BRSuccess)
      .catch(ui.BRFailure)
  } else {
    $("#message").text("Not here either")
  }
}

module.exports = {
    onCreateGame,
    onGamesPlayed,
    onReplayGame,
    onTL,
    onTM,
    onTR,
    onBL,
    onBM,
    onBR,
    onML,
    onMM,
    onMR,
}
