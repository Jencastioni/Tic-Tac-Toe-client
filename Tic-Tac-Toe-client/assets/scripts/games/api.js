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

  module.exports = {
    createGame,
    gameIndex,
  }