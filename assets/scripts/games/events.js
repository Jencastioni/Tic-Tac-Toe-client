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

//   const onGameIndex = function (event) {
//     api.gameIndex()
//       .then(ui.gameIndexSuccess)
//       .catch(ui.gameIndexFailure) 
//   }

//   const onGameShow = function (event) {
//     event.preventDefault()
  
//     const form = event.target
    
//     api.gameShow(form.game.id)
//       .then(ui.showGameSuccess)
//       .catch(ui.showGameFailure)
//   }

  const onGamesPlayed = function (event) {
    event.preventDefault()
    api.gameUpdate()
        .then(ui.gamesPlayedSuccess)
        .catch(ui.gamesPlayedFailure)
  }

//   const winCombo = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ]
//   // set array = by index not by #
  
 

//   const onPlayGame = function () {
//     cellElements.forEach(cell => {
//     cell.classList.remove(currentPlayer)
//     cell.removeEventListener('click', clickHandler)
//     cell.addEventListener('click', clickHandler, { once: true })
//   })
// }


  // const onCellClick = function (event) {
  //   event.preventDefault()
  //   $(event.target).text(currentPlayer)
  //   if (currentPlayer === "X") {
  //     currentPlayer = "O"
  //   } else if (currentPlayer === "O") {
  //     currentPlayer = "X"
  //   } else if (spaceIsEmpty) {
  //     (cell === currentPlayer)
  //   } else {
  //     $('#message').text('Invalid Move')
  //   }
  // } 

  // const onCellClick = function (event) {
  //   $(event.target).text(currentPlayer)
  //   console.log($(".TM").attr("data-cell"))
  //   if (currentPlayer === "X") {
  //     currentPlayer = "O"
  //   } else if (currentPlayer === "O") {
  //     currentPlayer = "X"
  //   } else if (spaceIsEmpty) {
  //     (cell === currentPlayer)
  //   } else {
  //     $("#message").text("Invalid Move")
  //   }
  // } 

  // // use event.target to single out specific cell when clicked for "X"
  // // use conditions to differentiate between x & o later

  // let currentPlayer = "X"
  // use event.target to single out specific cell when clicked for "X"
  // use conditions to differentiate between x & o later

  // let currentPlayer = "X" 
  // const onCellClick = function (event) {
  //   event.preventDefault()
  //   $(event.target).text(currentPlayer)
  //   if (spaceIsEmpty) {
      
  //   if (currentPlayer === "X") {
  //     currentPlayer = "O"
  //     cell === currentPlayer
  //   } else  {
  //     currentPlayer = "X"
  //     cell === currentPlayer)
  //   } 
    
  //   } else {
  //     $('#message').text('Invalid Move')
  //   }
  // } 

  
      


//   if (spaceIsEmpty) {
    
//   if (currentPlayer === "X") {
//     currentPlayer = "O"
//     cell === currentPlayer
//   } else  {
//     currentPlayer = "X"
//     cell === currentPlayer
//   } 
  
//   } else {
//     $('#message').text('Invalid Move')
//   }
// } 
 



  // function updateScores() {
      
  //   $scores.find('.x').find('u').html(scores.x);
  //   $scores.find('.ties').find('u').html(scores.ties);
  //   $scores.find('.o').find('u').html(scores.o);
    
  // } 

   // const onCellClick = function (event) {
  //   $(event.target).text(currentPlayer)
  //   console.log($(".TM").attr("data-cell"))
  //   if (currentPlayer === "X") {
  //     currentPlayer = "O"
  //   } else if (currentPlayer === "O") {
  //     currentPlayer = "X"
  //   } else if (spaceIsEmpty) {
  //     (cell === currentPlayer)
  //   } else {
  //     $("#message").text("Invalid Move")
  //   }
  // } 
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
  console.log(store.game)
}

const onTM = function () {
  event.preventDefault()
  if ($(".TM").text() === "") {
    api.value()
    api.TM()
      .then(ui.TMSuccess)
      .catch(ui.TMFailure)
  } else {
    $("#message").text("Invalid Move")
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
    $("#message").text("Invalid Move")
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
    $("#message").text("Invalid Move")
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
    $("#message").text("Invalid Move")
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
    $("#message").text("Invalid Move")
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
    $("#message").text("Invalid Move")
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
    $("#message").text("Invalid Move")
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
    $("#message").text("Invalid Move")
  }
}

module.exports = {
    onCreateGame,
    // onGameIndex,
    // onGameShow,
    onGamesPlayed,
    // onPlayGame,
    // onCellClick,
    // updateScores,
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
