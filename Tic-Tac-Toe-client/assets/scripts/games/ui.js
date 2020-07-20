'use strict'


const createGameSuccess = function (response) {
    $('#message').text('New Game loaded!')
}
   
const createGameFailure = function (error) {
    $('#message').text('Game failed to load :(')
  }


const gameIndexSuccess = function (response) {
    $('#message').text('Game History Loaded!')
}
      
const gameIndexFailure = function (error) {
    $('#message').text('Game History Failed to Load :(')
  }


module.exports = {
    createGameSuccess,
    createGameFailure,
    gameIndexSuccess,
    gameIndexFailure
}
