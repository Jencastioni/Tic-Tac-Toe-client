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
  // $('#new-game').on('click', function(){
  //   $('.board').show()
  // })

  $('.TL').on('click', gameEvents.onTL)
  $('.TM').on('click', gameEvents.onTM)
  $('.TR').on('click', gameEvents.onTR)
  $('.ML').on('click', gameEvents.onML)
  $('.MM').on('click', gameEvents.onMM)
  $('.MR').on('click', gameEvents.onMR)
  $('.BL').on('click', gameEvents.onBL)
  $('.BM').on('click', gameEvents.onBM)
  $('.BR').on('click', gameEvents.onBR)


  
  $('#games-played').on('submit', gameEvents.onGamesPlayed)

  $('#replay-button').on('click', gameEvents.onPlayGame)
})
