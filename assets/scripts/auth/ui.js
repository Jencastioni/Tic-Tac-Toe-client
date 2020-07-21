'use strict'

const store = require('../store')

const signUpSuccess = function () {
    $('#message').text('You Created an Account!')
    $('.board').hide()
}

const signUpFailure = function () {
    $('#message').text('Make Sure Both Passwords Match!')
}


const signInSuccess = function (response) {
   store.user = response.user  
   $('#message').text('You Have Signed In! Welcome!')
   $('.board').hide()

    $('#authenticated').show()
    $('#unauthenticated').hide()
  }
  
  const signInFailure = function () {
    $('#message').text('Sign in Failed :(')
  }
  

  const changePasswordSuccess = function () {
    $('#message').text('Your Password has Been Changed!')
    $('#authenticated').show()
    $('#unauthenticated').hide()
  }
  
  const changePasswordFailure = function () {
    $('#message').text('Unable to Change Password :( ')
  }
  

  const signOutSuccess = function () {
    $('#message').text('See You Soon!')
    $('#unauthenticated').show()
    $('#authenticated').hide()
  
    store.user = null
  }
  
  const signOutFailure = function () {
    $('#message').text('Unable to Sign Out :(')
  }
  
  module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    changePasswordFailure,
    changePasswordSuccess,
    signOutSuccess,
    signOutFailure
  }