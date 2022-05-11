console.log('Dress The Clown!')

let head = document.getElementById('head')
dressing = ['head', 'body', 'shoes']
let state = { focus: 1, head: 2, body: 3, shoes: 4 }

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

function upArrow() {
  state.focus++
  printState()
}

function downArrow() {
  state.focus--
  printState()
}

function leftArrow() {
  let bodySection = dressing[Math.abs(state.focus) % 3]
  state[bodySection]--
  printState()
}

function rightArrow() {
  let bodySection = dressing[Math.abs(state.focus) % 3]
  state[bodySection]++
  printState()
}

function randomNumber() {
  return Math.floor(Math.random() * 6)
}

function printState() {
  let bodySection = dressing[Math.abs(state.focus) % 3]
  console.log(
    ` dressing ${bodySection} item ${Math.abs(state[bodySection]) % 6}
      focus ${state.focus} \t abs(${Math.abs(state.focus) % 3}) 
      head  ${state.head}  \t abs(${Math.abs(state.head) % 6}) 
      body  ${state.body}  \t abs(${Math.abs(state.body) % 6}) 
      shoes ${state.shoes} \t abs(${Math.abs(state.shoes) % 6})`
  )
}
