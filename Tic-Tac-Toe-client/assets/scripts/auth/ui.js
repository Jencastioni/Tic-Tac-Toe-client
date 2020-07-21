'use strict'

const store = require('../store')

const signUpSuccess = function () {
    $('#message').text('Successfully Signed Up!')
}

const signUpFailure = function () {
    $('#message').text('Sign Up Failed :(')
}


const signInSuccess = function (response) {
    $('#message').text('Sign in Success!')
    console.log(store)
    
    store.user = response.user
    $('#authenticated').show()
    $('#unauthenticated').hide()
  }
  
  const signInFailure = function () {
    $('#message').text('Sign in Failed :(')
  }
  

  const changePasswordSuccess = function () {
    $('#message').text('Change Password Success!')
  }
  
  const changePasswordFailure = function () {
    $('#message').text('Change Password Failed :(')
  }
  

  const signOutSuccess = function () {
    $('#message').text('You have signed out!')
    $('#unauthenticated').show()
    $('#authenticated').hide()
  
    store.user = null
  }
  
  const signOutFailure = function () {
    $('#message').text('Sign out failed :(')
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