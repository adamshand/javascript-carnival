console.log('Dress The Clown!')

const bodyAreas = ['head', 'body', 'shoes']
let state = { focus: 1, head: 0, body: 0, shoes: 0 }

printState()

document.onkeydown = checkKey
function checkKey(e) {
  e = e || window.event
  if (e.keyCode == '38') {
    upArrow()
  } else if (e.keyCode == '40') {
    downArrow()
  } else if (e.keyCode == '37') {
    leftArrow()
  } else if (e.keyCode == '39') {
    rightArrow()
  }
}

function dressClown() {
  let area = getBodyArea()
  let item = getAreaItem(area)
  let file = `images/${area}${item}.png`
  let clothing = document.getElementById(area)
  clothing.src = file
}

function moveArrow() {
  for (let area of bodyAreas) {
    let focus = document.getElementById(area + 'Focus')
    focus.src = ''
  }
  let area = getBodyArea()
  let focus = document.getElementById(area + 'Focus')
  focus.src = 'pointer.png'
}

function getBodyArea() {
  return bodyAreas[Math.abs(state.focus) % 3]
}

function getAreaItem(area) {
  if (!area) {
    let area = getBodyArea()
  }
  return Math.abs(state[area]) % 6
}

function upArrow() {
  if (state.focus >= 1 && state.focus <= 2) {
    state.focus--
    moveArrow()
  }
  printState()
}

function downArrow() {
  if (state.focus >= 0 && state.focus <= 1) {
    state.focus++
    moveArrow()
  }
  printState()
}

function leftArrow() {
  state[getBodyArea()]--
  printState()
  dressClown()
}

function rightArrow() {
  state[getBodyArea()]++
  printState()
  dressClown()
}

function printState() {
  console.log(`focus is ${getBodyArea()}[${getAreaItem(getBodyArea())}]`)
  console.log(state)
  //   console.log(`head  ${state.head}  \t abs(${Math.abs(state.head) % 6})
  // body  ${state.body}  \t abs(${Math.abs(state.body) % 6})
  // shoes ${state.shoes} \t abs(${Math.abs(state.shoes) % 6})
  // ----`)
}

function randomNumber() {
  return Math.floor(Math.random() * 6)
}
