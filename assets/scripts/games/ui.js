'use strict'

const store = require("../store")

const api = require('./api')

const createGameSuccess = function (response) {
    store.game = response.game
    console.log(response)
    $('#message').text('New Game loaded!')
    store.player = "0"
    store.game.over = false
    console.log(store.game)
    $('.TL').empty()
    $('.TM').empty()
    $('.TR').empty()
    $('.ML').empty()
    $('.MM').empty()
    $('.MR').empty()
    $('.BL').empty()
    $('.BM').empty()
    $('.BR').empty()
}
   
const createGameFailure = function (error) {
    $('#message').text('Game failed to load :(')
  }


const gamesPlayedSuccess = function (response) {
    $('#message').text(response.games.length)
}
      
const gamesPlayedFailure = function (error) {
    $('#message').text('Game History Failed to Load :(')
  }


const TLSuccess = function (response) {
  store.game.cells[0] = response.game.cells[0]
    $('.TL').text(response.game.cells[0])
    let turn = store.player
    if (turn === "O") {
      turn = "X"
    } else {
      turn = "O"
    }
    let cells = store.game.cells
      if((cells[0] === "X" && cells[1] === "X" && cells[2] === "X")
      || (cells[3] === "X" && cells[4] === "X" && cells[5] === "X")
      || (cells[6] === "X" && cells[7] === "X" && cells[8] === "X")
      || (cells[0] === "X" && cells[3] === "X" && cells[6] === "X")
      || (cells[1] === "X" && cells[4] === "X" && cells[7] === "X")
      || (cells[2] === "X" && cells[5] === "X" && cells[8] === "X")
      || (cells[0] === "X" && cells[4] === "X" && cells[8] === "X")
      || (cells[2] === "X" && cells[4] === "X" && cells[6] === "X")
        ){
        // $('.board').hide()
          store.game.over = true
          $("#message").text("X wins")
        }else if((cells[0] === "O" && cells[1] === "O" && cells[2] === "O")
          || (cells[3] === "O" && cells[4] === "O" && cells[5] === "O")
          || (cells[6] === "O" && cells[7] === "O" && cells[8] === "O")
          || (cells[0] === "O" && cells[3] === "O" && cells[6] === "O")
          || (cells[1] === "O" && cells[4] === "O" && cells[7] === "O")
          || (cells[2] === "O" && cells[5] === "O" && cells[8] === "O")
          || (cells[0] === "O" && cells[4] === "O" && cells[8] === "O")
          || (cells[2] === "O" && cells[4] === "O" && cells[6] === "O")
          ){
          // $('.board').hide()
          store.game.over = true
          $("#message").text("O wins")
        }else if (cells[0] !== "" && cells[1] !== "" && cells[2] !== ""
          && cells[3] !== ""  && cells[4] !== ""  && cells[5] !==""
          && cells[6] !== ""  && cells[7] !== ""  && cells[8] !==""
          && cells[0] !== ""  && cells[3] !== ""  && cells[6] !==""
          && cells[1] !== ""  && cells[4] !== ""  && cells[7] !==""
          && cells[2] !== ""  && cells[5] !== ""  && cells[8] !==""
          && cells[0] !== ""  && cells[4] !== ""  && cells[8] !==""
          && cells[2] !== ""  && cells[4] !== ""  && cells[6] !==""
          ){
          // $('.board').hide()
            store.game.over = true
            $("#message").text("It's a tie!")
        }else{
          $("#message").text("It's " + turn + "'s turn!")
        }
}


const TLFailure = function (error) {
  $('#message').text('Failed')
}

const TMSuccess = function (response) {
  store.game.cells[1] = response.game.cells[1]
    $('.TM').text(response.game.cells[1])
    let turn = store.player
    if (turn === "O") {
      turn = "X"
    } else {
      turn = "O"
    }
    let cells = store.game.cells
      if((cells[0] === "X" && cells[1] === "X" && cells[2] === "X")
      || (cells[3] === "X" && cells[4] === "X" && cells[5] === "X")
      || (cells[6] === "X" && cells[7] === "X" && cells[8] === "X")
      || (cells[0] === "X" && cells[3] === "X" && cells[6] === "X")
      || (cells[1] === "X" && cells[4] === "X" && cells[7] === "X")
      || (cells[2] === "X" && cells[5] === "X" && cells[8] === "X")
      || (cells[0] === "X" && cells[4] === "X" && cells[8] === "X")
      || (cells[2] === "X" && cells[4] === "X" && cells[6] === "X")
        ){
        // $('.board').hide()
          store.game.over = true
          $("#message").text("X wins")
        }else if((cells[0] === "O" && cells[1] === "O" && cells[2] === "O")
          || (cells[3] === "O" && cells[4] === "O" && cells[5] === "O")
          || (cells[6] === "O" && cells[7] === "O" && cells[8] === "O")
          || (cells[0] === "O" && cells[3] === "O" && cells[6] === "O")
          || (cells[1] === "O" && cells[4] === "O" && cells[7] === "O")
          || (cells[2] === "O" && cells[5] === "O" && cells[8] === "O")
          || (cells[0] === "O" && cells[4] === "O" && cells[8] === "O")
          || (cells[2] === "O" && cells[4] === "O" && cells[6] === "O")
          ){
          // $('.board').hide()
          store.game.over = true
          $("#message").text("O wins")
        }else if (cells[0] !== "" && cells[1] !== "" && cells[2] !== ""
          && cells[3] !== ""  && cells[4] !== ""  && cells[5] !==""
          && cells[6] !== ""  && cells[7] !== ""  && cells[8] !==""
          && cells[0] !== ""  && cells[3] !== ""  && cells[6] !==""
          && cells[1] !== ""  && cells[4] !== ""  && cells[7] !==""
          && cells[2] !== ""  && cells[5] !== ""  && cells[8] !==""
          && cells[0] !== ""  && cells[4] !== ""  && cells[8] !==""
          && cells[2] !== ""  && cells[4] !== ""  && cells[6] !==""
          ){
          // $('.board').hide()
            store.game.over = true
            $("#message").text("It's a tie!")
        }else{
          $("#message").text("It's " + turn + "'s turn!")
        }
}

const TMFailure = function (error) {
  $('#message').text('Failed')
}

const TRSuccess = function (response) {
  store.game.cells[2] = response.game.cells[2]
    $('.TR').text(response.game.cells[2])
    let turn = store.player
    if (turn === "O") {
      turn = "X"
    } else {
      turn = "O"
    }
    let cells = store.game.cells
      if((cells[0] === "X" && cells[1] === "X" && cells[2] === "X")
      || (cells[3] === "X" && cells[4] === "X" && cells[5] === "X")
      || (cells[6] === "X" && cells[7] === "X" && cells[8] === "X")
      || (cells[0] === "X" && cells[3] === "X" && cells[6] === "X")
      || (cells[1] === "X" && cells[4] === "X" && cells[7] === "X")
      || (cells[2] === "X" && cells[5] === "X" && cells[8] === "X")
      || (cells[0] === "X" && cells[4] === "X" && cells[8] === "X")
      || (cells[2] === "X" && cells[4] === "X" && cells[6] === "X")
        ){
        // $('.board').hide()
          store.game.over = true
          $("#message").text("X wins")
        }else if((cells[0] === "O" && cells[1] === "O" && cells[2] === "O")
          || (cells[3] === "O" && cells[4] === "O" && cells[5] === "O")
          || (cells[6] === "O" && cells[7] === "O" && cells[8] === "O")
          || (cells[0] === "O" && cells[3] === "O" && cells[6] === "O")
          || (cells[1] === "O" && cells[4] === "O" && cells[7] === "O")
          || (cells[2] === "O" && cells[5] === "O" && cells[8] === "O")
          || (cells[0] === "O" && cells[4] === "O" && cells[8] === "O")
          || (cells[2] === "O" && cells[4] === "O" && cells[6] === "O")
          ){
          // $('.board').hide()
          store.game.over = true
          $("#message").text("O wins")
        }else if (cells[0] !== "" && cells[1] !== "" && cells[2] !== ""
          && cells[3] !== ""  && cells[4] !== ""  && cells[5] !==""
          && cells[6] !== ""  && cells[7] !== ""  && cells[8] !==""
          && cells[0] !== ""  && cells[3] !== ""  && cells[6] !==""
          && cells[1] !== ""  && cells[4] !== ""  && cells[7] !==""
          && cells[2] !== ""  && cells[5] !== ""  && cells[8] !==""
          && cells[0] !== ""  && cells[4] !== ""  && cells[8] !==""
          && cells[2] !== ""  && cells[4] !== ""  && cells[6] !==""
          ){
          // $('.board').hide()
            store.game.over = true
            $("#message").text("It's a tie!")
        }else{
          $("#message").text("It's " + turn + "'s turn!")
        }
}

const TRFailure = function (error) {
  $('#message').text('Failed')
}

const MLSuccess = function (response) {
  store.game.cells[3] = response.game.cells[3]
    $('.ML').text(response.game.cells[3])
    let turn = store.player
    if (turn === "O") {
      turn = "X"
    } else {
      turn = "O"
    }
    let cells = store.game.cells
      if((cells[0] === "X" && cells[1] === "X" && cells[2] === "X")
      || (cells[3] === "X" && cells[4] === "X" && cells[5] === "X")
      || (cells[6] === "X" && cells[7] === "X" && cells[8] === "X")
      || (cells[0] === "X" && cells[3] === "X" && cells[6] === "X")
      || (cells[1] === "X" && cells[4] === "X" && cells[7] === "X")
      || (cells[2] === "X" && cells[5] === "X" && cells[8] === "X")
      || (cells[0] === "X" && cells[4] === "X" && cells[8] === "X")
      || (cells[2] === "X" && cells[4] === "X" && cells[6] === "X")
        ){
        // $('.board').hide()
          store.game.over = true
          $("#message").text("X wins")
        }else if((cells[0] === "O" && cells[1] === "O" && cells[2] === "O")
          || (cells[3] === "O" && cells[4] === "O" && cells[5] === "O")
          || (cells[6] === "O" && cells[7] === "O" && cells[8] === "O")
          || (cells[0] === "O" && cells[3] === "O" && cells[6] === "O")
          || (cells[1] === "O" && cells[4] === "O" && cells[7] === "O")
          || (cells[2] === "O" && cells[5] === "O" && cells[8] === "O")
          || (cells[0] === "O" && cells[4] === "O" && cells[8] === "O")
          || (cells[2] === "O" && cells[4] === "O" && cells[6] === "O")
          ){
          // $('.board').hide()
          store.game.over = true
          $("#message").text("O wins")
        }else if (cells[0] !== "" && cells[1] !== "" && cells[2] !== ""
          && cells[3] !== ""  && cells[4] !== ""  && cells[5] !==""
          && cells[6] !== ""  && cells[7] !== ""  && cells[8] !==""
          && cells[0] !== ""  && cells[3] !== ""  && cells[6] !==""
          && cells[1] !== ""  && cells[4] !== ""  && cells[7] !==""
          && cells[2] !== ""  && cells[5] !== ""  && cells[8] !==""
          && cells[0] !== ""  && cells[4] !== ""  && cells[8] !==""
          && cells[2] !== ""  && cells[4] !== ""  && cells[6] !==""
          ){
          // $('.board').hide()
            store.game.over = true
            $("#message").text("It's a tie!")
        }else{
          $("#message").text("It's " + turn + "'s turn!")
        }
}

const MLFailure = function (error) {
  $('#message').text('Failed')
}

const MMSuccess = function (response) {
  store.game.cells[4] = response.game.cells[4]
    $('.MM').text(response.game.cells[4])
    let turn = store.player
    if (turn === "O") {
      turn = "X"
    } else {
      turn = "O"
    }
    let cells = store.game.cells
      if((cells[0] === "X" && cells[1] === "X" && cells[2] === "X")
      || (cells[3] === "X" && cells[4] === "X" && cells[5] === "X")
      || (cells[6] === "X" && cells[7] === "X" && cells[8] === "X")
      || (cells[0] === "X" && cells[3] === "X" && cells[6] === "X")
      || (cells[1] === "X" && cells[4] === "X" && cells[7] === "X")
      || (cells[2] === "X" && cells[5] === "X" && cells[8] === "X")
      || (cells[0] === "X" && cells[4] === "X" && cells[8] === "X")
      || (cells[2] === "X" && cells[4] === "X" && cells[6] === "X")
        ){
        // $('.board').hide()
          store.game.over = true
          $("#message").text("X wins")
        }else if((cells[0] === "O" && cells[1] === "O" && cells[2] === "O")
          || (cells[3] === "O" && cells[4] === "O" && cells[5] === "O")
          || (cells[6] === "O" && cells[7] === "O" && cells[8] === "O")
          || (cells[0] === "O" && cells[3] === "O" && cells[6] === "O")
          || (cells[1] === "O" && cells[4] === "O" && cells[7] === "O")
          || (cells[2] === "O" && cells[5] === "O" && cells[8] === "O")
          || (cells[0] === "O" && cells[4] === "O" && cells[8] === "O")
          || (cells[2] === "O" && cells[4] === "O" && cells[6] === "O")
          ){
          // $('.board').hide()
          store.game.over = true
          $("#message").text("O wins")
        }else if (cells[0] !== "" && cells[1] !== "" && cells[2] !== ""
          && cells[3] !== ""  && cells[4] !== ""  && cells[5] !==""
          && cells[6] !== ""  && cells[7] !== ""  && cells[8] !==""
          && cells[0] !== ""  && cells[3] !== ""  && cells[6] !==""
          && cells[1] !== ""  && cells[4] !== ""  && cells[7] !==""
          && cells[2] !== ""  && cells[5] !== ""  && cells[8] !==""
          && cells[0] !== ""  && cells[4] !== ""  && cells[8] !==""
          && cells[2] !== ""  && cells[4] !== ""  && cells[6] !==""
          ){
          // $('.board').hide()
            store.game.over = true
            $("#message").text("It's a tie!")
        }else{
          $("#message").text("It's " + turn + "'s turn!")
        }
}

const MMFailure = function (error) {
  $('#message').text('Failed')
}


const MRSuccess = function (response) {
  store.game.cells[5] = response.game.cells[5]
    $('.MR').text(response.game.cells[5])
    let turn = store.player
    if (turn === "O") {
      turn = "X"
    } else {
      turn = "O"
    }
    let cells = store.game.cells
      if((cells[0] === "X" && cells[1] === "X" && cells[2] === "X")
      || (cells[3] === "X" && cells[4] === "X" && cells[5] === "X")
      || (cells[6] === "X" && cells[7] === "X" && cells[8] === "X")
      || (cells[0] === "X" && cells[3] === "X" && cells[6] === "X")
      || (cells[1] === "X" && cells[4] === "X" && cells[7] === "X")
      || (cells[2] === "X" && cells[5] === "X" && cells[8] === "X")
      || (cells[0] === "X" && cells[4] === "X" && cells[8] === "X")
      || (cells[2] === "X" && cells[4] === "X" && cells[6] === "X")
        ){
        // $('.board').hide()
          store.game.over = true
          $("#message").text("X wins")
        }else if((cells[0] === "O" && cells[1] === "O" && cells[2] === "O")
          || (cells[3] === "O" && cells[4] === "O" && cells[5] === "O")
          || (cells[6] === "O" && cells[7] === "O" && cells[8] === "O")
          || (cells[0] === "O" && cells[3] === "O" && cells[6] === "O")
          || (cells[1] === "O" && cells[4] === "O" && cells[7] === "O")
          || (cells[2] === "O" && cells[5] === "O" && cells[8] === "O")
          || (cells[0] === "O" && cells[4] === "O" && cells[8] === "O")
          || (cells[2] === "O" && cells[4] === "O" && cells[6] === "O")
          ){
          // $('.board').hide()
          store.game.over = true
          $("#message").text("O wins")
        }else if (cells[0] !== "" && cells[1] !== "" && cells[2] !== ""
          && cells[3] !== ""  && cells[4] !== ""  && cells[5] !==""
          && cells[6] !== ""  && cells[7] !== ""  && cells[8] !==""
          && cells[0] !== ""  && cells[3] !== ""  && cells[6] !==""
          && cells[1] !== ""  && cells[4] !== ""  && cells[7] !==""
          && cells[2] !== ""  && cells[5] !== ""  && cells[8] !==""
          && cells[0] !== ""  && cells[4] !== ""  && cells[8] !==""
          && cells[2] !== ""  && cells[4] !== ""  && cells[6] !==""
          ){
          // $('.board').hide()
            store.game.over = true
            $("#message").text("It's a tie!")
        }else{
          $("#message").text("It's " + turn + "'s turn!")
        }
}

const MRFailure = function (error) {
  $('#message').text('Failed')
}

const BLSuccess = function (response) {
  store.game.cells[6] = response.game.cells[6]
    $('.BL').text(response.game.cells[6])
    let turn = store.player
    if (turn === "O") {
      turn = "X"
    } else {
      turn = "O"
    }
    let cells = store.game.cells
      if((cells[0] === "X" && cells[1] === "X" && cells[2] === "X")
      || (cells[3] === "X" && cells[4] === "X" && cells[5] === "X")
      || (cells[6] === "X" && cells[7] === "X" && cells[8] === "X")
      || (cells[0] === "X" && cells[3] === "X" && cells[6] === "X")
      || (cells[1] === "X" && cells[4] === "X" && cells[7] === "X")
      || (cells[2] === "X" && cells[5] === "X" && cells[8] === "X")
      || (cells[0] === "X" && cells[4] === "X" && cells[8] === "X")
      || (cells[2] === "X" && cells[4] === "X" && cells[6] === "X")
        ){
        // $('.board').hide()
          store.game.over = true
          $("#message").text("X wins")
        }else if((cells[0] === "O" && cells[1] === "O" && cells[2] === "O")
          || (cells[3] === "O" && cells[4] === "O" && cells[5] === "O")
          || (cells[6] === "O" && cells[7] === "O" && cells[8] === "O")
          || (cells[0] === "O" && cells[3] === "O" && cells[6] === "O")
          || (cells[1] === "O" && cells[4] === "O" && cells[7] === "O")
          || (cells[2] === "O" && cells[5] === "O" && cells[8] === "O")
          || (cells[0] === "O" && cells[4] === "O" && cells[8] === "O")
          || (cells[2] === "O" && cells[4] === "O" && cells[6] === "O")
          ){
          // $('.board').hide()
          store.game.over = true
          $("#message").text("O wins")
        }else if (cells[0] !== "" && cells[1] !== "" && cells[2] !== ""
          && cells[3] !== ""  && cells[4] !== ""  && cells[5] !==""
          && cells[6] !== ""  && cells[7] !== ""  && cells[8] !==""
          && cells[0] !== ""  && cells[3] !== ""  && cells[6] !==""
          && cells[1] !== ""  && cells[4] !== ""  && cells[7] !==""
          && cells[2] !== ""  && cells[5] !== ""  && cells[8] !==""
          && cells[0] !== ""  && cells[4] !== ""  && cells[8] !==""
          && cells[2] !== ""  && cells[4] !== ""  && cells[6] !==""
          ){
          // $('.board').hide()
            store.game.over = true
            $("#message").text("It's a tie!")
        }else{
          $("#message").text("It's " + turn + "'s turn!")
        }
}

const BLFailure = function (error) {
  $('#message').text('Failed')
}


const BMSuccess = function (response) {
  store.game.cells[7] = response.game.cells[7]
    $('.BM').text(response.game.cells[7])
    console.log(response)
    let turn = store.player
    if (turn === "O") {
      turn = "X"
    } else {
      turn = "O"
    }
    let cells = store.game.cells
      if((cells[0] === "X" && cells[1] === "X" && cells[2] === "X")
      || (cells[3] === "X" && cells[4] === "X" && cells[5] === "X")
      || (cells[6] === "X" && cells[7] === "X" && cells[8] === "X")
      || (cells[0] === "X" && cells[3] === "X" && cells[6] === "X")
      || (cells[1] === "X" && cells[4] === "X" && cells[7] === "X")
      || (cells[2] === "X" && cells[5] === "X" && cells[8] === "X")
      || (cells[0] === "X" && cells[4] === "X" && cells[8] === "X")
      || (cells[2] === "X" && cells[4] === "X" && cells[6] === "X")
        ){
        // $('.board').hide()
          store.game.over = true
          $("#message").text("X wins")
        }else if((cells[0] === "O" && cells[1] === "O" && cells[2] === "O")
          || (cells[3] === "O" && cells[4] === "O" && cells[5] === "O")
          || (cells[6] === "O" && cells[7] === "O" && cells[8] === "O")
          || (cells[0] === "O" && cells[3] === "O" && cells[6] === "O")
          || (cells[1] === "O" && cells[4] === "O" && cells[7] === "O")
          || (cells[2] === "O" && cells[5] === "O" && cells[8] === "O")
          || (cells[0] === "O" && cells[4] === "O" && cells[8] === "O")
          || (cells[2] === "O" && cells[4] === "O" && cells[6] === "O")
          ){
          // $('.board').hide()
          store.game.over = true
          $("#message").text("O wins")
        }else if (cells[0] !== "" && cells[1] !== "" && cells[2] !== ""
          && cells[3] !== ""  && cells[4] !== ""  && cells[5] !==""
          && cells[6] !== ""  && cells[7] !== ""  && cells[8] !==""
          && cells[0] !== ""  && cells[3] !== ""  && cells[6] !==""
          && cells[1] !== ""  && cells[4] !== ""  && cells[7] !==""
          && cells[2] !== ""  && cells[5] !== ""  && cells[8] !==""
          && cells[0] !== ""  && cells[4] !== ""  && cells[8] !==""
          && cells[2] !== ""  && cells[4] !== ""  && cells[6] !==""
          ){
          // $('.board').hide()
            store.game.over = true
            $("#message").text("It's a tie!")
        }else{
          $("#message").text("It's " + turn + "'s turn!")
        }
}

const BMFailure = function (error) {
  $('#message').text('Failed')
}

const BRSuccess = function (response) {
  store.game.cells[8] = response.game.cells[8]
    $('.BR').text(response.game.cells[8])
    let turn = store.player
    if (turn === "O") {
      turn = "X"
    } else {
      turn = "O"
    }
    let cells = store.game.cells
      if((cells[0] === "X" && cells[1] === "X" && cells[2] === "X")
      || (cells[3] === "X" && cells[4] === "X" && cells[5] === "X")
      || (cells[6] === "X" && cells[7] === "X" && cells[8] === "X")
      || (cells[0] === "X" && cells[3] === "X" && cells[6] === "X")
      || (cells[1] === "X" && cells[4] === "X" && cells[7] === "X")
      || (cells[2] === "X" && cells[5] === "X" && cells[8] === "X")
      || (cells[0] === "X" && cells[4] === "X" && cells[8] === "X")
      || (cells[2] === "X" && cells[4] === "X" && cells[6] === "X")
        ){
        // $('.board').hide()
          store.game.over = true
          $("#message").text("X wins")
        }else if((cells[0] === "O" && cells[1] === "O" && cells[2] === "O")
          || (cells[3] === "O" && cells[4] === "O" && cells[5] === "O")
          || (cells[6] === "O" && cells[7] === "O" && cells[8] === "O")
          || (cells[0] === "O" && cells[3] === "O" && cells[6] === "O")
          || (cells[1] === "O" && cells[4] === "O" && cells[7] === "O")
          || (cells[2] === "O" && cells[5] === "O" && cells[8] === "O")
          || (cells[0] === "O" && cells[4] === "O" && cells[8] === "O")
          || (cells[2] === "O" && cells[4] === "O" && cells[6] === "O")
          ){
          // $('.board').hide()
          store.game.over = true
          $("#message").text("O wins")
        }else if (cells[0] !== "" && cells[1] !== "" && cells[2] !== ""
          && cells[3] !== ""  && cells[4] !== ""  && cells[5] !==""
          && cells[6] !== ""  && cells[7] !== ""  && cells[8] !==""
          && cells[0] !== ""  && cells[3] !== ""  && cells[6] !==""
          && cells[1] !== ""  && cells[4] !== ""  && cells[7] !==""
          && cells[2] !== ""  && cells[5] !== ""  && cells[8] !==""
          && cells[0] !== ""  && cells[4] !== ""  && cells[8] !==""
          && cells[2] !== ""  && cells[4] !== ""  && cells[6] !==""
          ){
          // $('.board').hide()
            store.game.over = true
            $("#message").text("It's a tie!")
        }else{
          $("#message").text("It's " + turn + "'s turn!")
        }
}

const BRFailure = function (error) {
  $('#message').text('Failed')
}
     
module.exports = {
    createGameSuccess,
    createGameFailure,
    gamesPlayedSuccess,
    gamesPlayedFailure,
    TLSuccess,
    TMSuccess,
    TRSuccess,
    MLSuccess,
    MMSuccess,
    MRSuccess,
    BLSuccess,
    BMSuccess,
    BRSuccess,
    TLFailure,
    TMFailure,
    TRFailure,
    MLFailure,
    MMFailure,
    MRFailure,
    BLFailure,
    BMFailure,
    BRFailure,
}
