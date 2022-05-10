console.log('Inflate The Unicorn!')

let soundEffect = new Audio('popping.mp3')
let unicorns = document.getElementsByTagName('img')

for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = clickedTheUnicorn
}

function clickedTheUnicorn(e) {
  let unicorn = e.target
  inflationStatus = unicorn.src
    .replace(/^.*unicorn-/i, '')
    .replace(/\.png/i, '')
  if (inflationStatus < 3) {
    newImage = `images/unicorn-${parseInt(inflationStatus) + 1}.png`
    unicorn.src = newImage
  } else {
    soundEffect.play()
    newImage = `images/unicorn-0.png`
    unicorn.src = newImage
  }
}
