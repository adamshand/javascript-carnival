console.log('Dress The Clown!')

let head = document.getElementById('head')
let state = { focus: '', head: 0, body: 0, shoes: 0 }

document.onkeydown = checkKey
function checkKey(e) {
  e = e || window.event
  if (e.keyCode == '38') {
    console.log('up')
  } else if (e.keyCode == '40') {
    console.log('down')
  } else if (e.keyCode == '37') {
    console.log('left')
  } else if (e.keyCode == '39') {
    console.log('right')
  }
}

function randomNumber() {
  return Math.floor(Math.random() * 6)
}
