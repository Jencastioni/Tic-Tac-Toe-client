'use strict'

const config = require('../config')
const store = require('../store')


const createGame = function () {
  return $.ajax ({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const replayGame = function () {
  return $.ajax ({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

store.player = "O" 
  const value = function () {
    if (store.player  === "X") {
      store.player  = "O"
     return store.player 

    } else {
      store.player  = "X"
    return store.player 
    }
  }

  const TL = function() {
    return $.ajax({
      url: config.apiUrl + '/games/' + store.game._id, 
      method: 'PATCH',
      headers: {
        id: store.game_id,
        Authorization: 'Bearer ' + store.user.token
      },
      data: {
        game: { 
          cell:{
          index: $(".TL").attr("data-cell"),
          value: store.player 
          },
         over: false
        }
      }
    })
  }

  const TM = function() {
    return $.ajax({
      url: config.apiUrl + '/games/' + store.game._id, 
      method: 'PATCH',
      headers: {
        id: store.game_id,
        Authorization: 'Bearer ' + store.user.token
      },
      data: {
        game: { 
          cell:{
          index: $(".TM").attr("data-cell"),
          value: store.player 
          },
         over: false
        }
      }
    })
  }

  const TR = function() {
    return $.ajax({
      url: config.apiUrl + '/games/' + store.game._id, 
      method: 'PATCH',
      headers: {
        id: store.game_id,
        Authorization: 'Bearer ' + store.user.token
      },
      data: {
        game: { 
          cell:{
          index: $(".TR").attr("data-cell"),
          value: store.player 
          },
         over: false
        }
      }
    })
  }

  const ML = function() {
    return $.ajax({
      url: config.apiUrl + '/games/' + store.game._id, 
      method: 'PATCH',
      headers: {
        id: store.game_id,
        Authorization: 'Bearer ' + store.user.token
      },
      data: {
        game: { 
          cell:{
          index: $(".ML").attr("data-cell"),
          value: store.player 
          },
         over: false
        }
      }
    })
  }

  const MM = function() {
    return $.ajax({
      url: config.apiUrl + '/games/' + store.game._id, 
      method: 'PATCH',
      headers: {
        id: store.game_id,
        Authorization: 'Bearer ' + store.user.token
      },
      data: {
        game: { 
          cell:{
          index: $(".MM").attr("data-cell"),
          value: store.player 
          },
         over: false
        }
      }
    })
  }

  const MR = function() {
    return $.ajax({
      url: config.apiUrl + '/games/' + store.game._id, 
      method: 'PATCH',
      headers: {
        id: store.game_id,
        Authorization: 'Bearer ' + store.user.token
      },
      data: {
        game: { 
          cell:{
          index: $(".MR").attr("data-cell"),
          value: store.player 
          },
         over: false
        }
      }
    })
  }

  const BL = function() {
    return $.ajax({
      url: config.apiUrl + '/games/' + store.game._id, 
      method: 'PATCH',
      headers: {
        id: store.game_id,
        Authorization: 'Bearer ' + store.user.token
      },
      data: {
        game: { 
          cell:{
          index: $(".BL").attr("data-cell"),
          value: store.player 
          },
         over: false
        }
      }
    })
  }

  const BM = function() {
    return $.ajax({
      url: config.apiUrl + '/games/' + store.game._id, 
      method: 'PATCH',
      headers: {
        id: store.game_id,
        Authorization: 'Bearer ' + store.user.token
      },
      data: {
        game: { 
          cell:{
          index: $(".BM").attr("data-cell"),
          value: store.player 
          },
         over: false
        }
      }
    })
  }

  const BR = function() {
    return $.ajax({
      url: config.apiUrl + '/games/' + store.game._id, 
      method: 'PATCH',
      headers: {
        id: store.game_id,
        Authorization: 'Bearer ' + store.user.token
      },
      data: {
        game: { 
          cell:{
          index: $(".BR").attr("data-cell"),
          value: store.player 
          },
         over: false
        }
      }
    })
  }

const gamesPlayed= function () {
    return $.ajax({
      url: config.apiUrl + '/games',
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + store.user.token
      },
    })
  }

  module.exports = {
    createGame,
    replayGame,
    gamesPlayed,
    value,
    TL,
    TM,
    TR,
    ML,
    MM,
    MR,
    BL,
    BM,
    BR,
  }