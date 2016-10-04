const wreck = require('wreck')

function moveCar (left, right) {
  const now = Date.now()

  if (lastMove + 200 < now) { // orig. 200 ms
    const request = new XMLHttpRequest()

    // if direction is opposite, change sign of +left and +right
    request.open('GET', '/engines?left=' + Math.round(-left) + '&right=' + Math.round(-right), true)

    request.send(null)
  }
}

function move (direction) {
  if (direction === 'f') {
    moveCar(-1000, -1000)
  }

  if (direction === 'b') {
    moveCar(1000, 1000)
  }

  if (direction === 'l') {
    moveCar(-1000, 1000)
  }

  if (direction === 'r') {
    moveCar(1000, -1000)
  }
}
