'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
console.log('authEvents are', authEvents)

const gameEvents = require('./games/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#create-game').on('click', gameEvents.onCreateGame)
  $('#game-index').on('click', gameEvents.onGameIndex)
  $('#game-show').on('submit', gameEvents.onGameShow)
  $('#game-update').on('submit', gameEvents.onGameUpdate)
})
