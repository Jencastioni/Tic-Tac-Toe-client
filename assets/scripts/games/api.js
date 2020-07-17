'use strict'

const config = require('../config')
const store = require('../store')

const createGame = function (formData) {
    console.log(store)
    return $.ajax({
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        url: config.apiUrl + '/games/',
        method: 'POST',
        data: formData
    })
  }

const gameIndex = function () {
    return $.ajax({
      url: config.apiUrl + '/games'
    })
  }
  const topLeft = function(){
    return $.ajax({
      url: config.apiUrl + '/games/' + store.game._id,
      method: "PATCH",
      headers:{
        id: store.game._id,
        Authorization: 'Bearer ' + store.user.token
      },
      data: {
        game:{
          cell: {
            index: $('#topLeft').attr('data-cell-index'),
            value: player
          },
          over: false
        }
      }
    })
  }

  module.exports = {
    createGame,
    gameIndex,
    topLeft
  }