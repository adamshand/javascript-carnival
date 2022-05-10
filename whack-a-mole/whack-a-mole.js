console.log('Whack-a-Mole!')

let soundEffect = new Audio('whack-short.mp3')
let prevPick = undefined

squares = document.getElementsByTagName('TD')
for (let i = 0; i < squares.length; i++) {
  squares[i].onclick = clickedTheSquare
}

// Gentleman, start your moles …
newRandomMole()

// defining square globally means you can introspect in devtools console
let square
function clickedTheSquare(e) {
  square = e.target
  //console.log(e.target.parentNode.parentNode.parentNode.children)
  if (square.src) {
    square.src = ''
    soundEffect.play()
    setTimeout(function () {
      newRandomMole()
    }, Math.floor(Math.random() * 3000) + 700)
  }
}

function pickRandomSquare() {
  return Math.floor(Math.random() * squares.length)
}

function newRandomMole() {
  let nextPick = pickRandomSquare()
  while (prevPick === nextPick) {
    nextPick = pickRandomSquare()
  }
  prevPick = nextPick
  squares[nextPick].innerHTML = `<img class="wam" src="mole.png" />`
}
