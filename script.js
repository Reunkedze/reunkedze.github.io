let isGameStarted = false
const size = 31
const start = document.querySelector('.start')
const reset = document.querySelector('.reset')
const rows = document.querySelectorAll('.row')
const cells = document.querySelectorAll('.cell')

// const firstCell = document.querySelector('.cell')
// firstCell.onclick = () => {
//   firstCell.classList.add('active')
// }

// debugger
// alert(typeof(firstCell.classList))

// for (let i = 0; i < rows.length; i++) {
//   for (let n = 0; n < rows[i].children.length; n++) {
//     rows[i].children[n].classList.add('active')
//   }
// }

const cellsEnumerate = () => {
  for (let i = 0; i < rows.length; i++) {
    for (let n = 0; n < rows[i].children.length; n++) {
      if (i === 0 && n === 0) {
        activeNeighboursCount = 0
        const neighbours = [rows[i + 1].children[n], rows[i + 1].children[n + 1], rows[i].children[n + 1]]
        for (let neighboursCells = 0; neighboursCells < 3; neighboursCells++) {
          if (neighbours[neighboursCells].classList.length === 2) {
            activeNeighboursCount++
          }
        }
        rows[i].children[n].textContent = activeNeighboursCount
      } else if (i === 0 && n === size - 1) {
        activeNeighboursCount = 0
        const neighbours = [rows[i].children[n - 1], rows[i + 1].children[n - 1], rows[i + 1].children[n]]
        for (let neighboursCells = 0; neighboursCells < 3; neighboursCells++) {
          if (neighbours[neighboursCells].classList.length === 2) {
            activeNeighboursCount++
          }
        }
        rows[i].children[n].textContent = activeNeighboursCount
      } else if (i === size - 1 && n === 0) {
        activeNeighboursCount = 0
        const neighbours = [rows[i - 1].children[n], rows[i - 1].children[n + 1], rows[i].children[n + 1]]
        for (let neighboursCells = 0; neighboursCells < 3; neighboursCells++) {
          if (neighbours[neighboursCells].classList.length === 2) {
            activeNeighboursCount++
          }
        }
        rows[i].children[n].textContent = activeNeighboursCount
      } else if (i === size - 1 && n === size - 1) {
        activeNeighboursCount = 0
        const neighbours = [rows[i - 1].children[n], rows[i - 1].children[n - 1], rows[i].children[n - 1]]
        for (let neighboursCells = 0; neighboursCells < 3; neighboursCells++) {
          if (neighbours[neighboursCells].classList.length === 2) {
            activeNeighboursCount++
          }
        }
        rows[i].children[n].textContent = activeNeighboursCount
      } else if (i === 0) {
        activeNeighboursCount = 0
        const neighbours = [rows[i].children[n - 1], rows[i + 1].children[n - 1], rows[i + 1].children[n], rows[i + 1].children[n + 1], rows[i].children[n + 1]]
        for (let neighboursCells = 0; neighboursCells < 5; neighboursCells++) {
          if (neighbours[neighboursCells].classList.length === 2) {
            activeNeighboursCount++
          }
        }
        rows[i].children[n].textContent = activeNeighboursCount
      } else if (i === size - 1) {
        activeNeighboursCount = 0
        const neighbours = [rows[i].children[n - 1], rows[i - 1].children[n - 1], rows[i - 1].children[n], rows[i - 1].children[n + 1], rows[i].children[n + 1]]
        for (let neighboursCells = 0; neighboursCells < 5; neighboursCells++) {
          if (neighbours[neighboursCells].classList.length === 2) {
            activeNeighboursCount++
          }
        }
        rows[i].children[n].textContent = activeNeighboursCount
      } else if (n === size - 1) {
        activeNeighboursCount = 0
        const neighbours = [rows[i - 1].children[n], rows[i - 1].children[n - 1], rows[i].children[n - 1], rows[i + 1].children[n - 1], rows[i + 1].children[n]]
        for (let neighboursCells = 0; neighboursCells < 5; neighboursCells++) {
          if (neighbours[neighboursCells].classList.length === 2) {
            activeNeighboursCount++
          }
        }
        rows[i].children[n].textContent = activeNeighboursCount
      } else if (n === 0) {
        activeNeighboursCount = 0
        const neighbours = [rows[i - 1].children[n], rows[i - 1].children[n + 1], rows[i].children[n + 1], rows[i + 1].children[n + 1], rows[i + 1].children[n]]
        for (let neighboursCells = 0; neighboursCells < 5; neighboursCells++) {
          if (neighbours[neighboursCells].classList.length === 2) {
            activeNeighboursCount++
          }
        }
        rows[i].children[n].textContent = activeNeighboursCount
      } else {
        activeNeighboursCount = 0
        const neighbours = [rows[i - 1].children[n - 1], rows[i - 1].children[n], rows[i - 1].children[n + 1], rows[i].children[n + 1], rows[i + 1].children[n + 1], rows[i + 1].children[n], rows[i + 1].children[n - 1], rows[i].children[n - 1]]
        for (let neighboursCells = 0; neighboursCells < 8; neighboursCells++) {
          if (neighbours[neighboursCells].classList.length === 2) {
            activeNeighboursCount++
          }
        }
        rows[i].children[n].textContent = activeNeighboursCount
      }
    }
  }
}

start.onclick = () => {
  isGameStarted = true
  cellsEnumerate()
  const game = setInterval(() => {
    isChanged = false
    for (let i = 0; i < rows.length; i++) {
      for (let n = 0; n < rows[i].children.length; n++) {
        if (rows[i].children[n].textContent == '3' && rows[i].children[n].classList.length == 1) {
          rows[i].children[n].classList.add('active')
          isChanged = true
        } else if ((rows[i].children[n].textContent == '2' || rows[i].children[n].textContent == '3') && rows[i].children[n].classList.length == 2) {
        } else {
          rows[i].children[n].classList.remove('active')
          isChanged = true
        }
      }
    }
    if (!isChanged) {
    }
    cellsEnumerate()
  }, 1000)

  reset.onclick = () => {
    clearInterval(game)
    isGameStarted = false
    for (let i = 0; i < rows.length; i++) {
      for (let n = 0; n < rows[i].children.length; n++) {
        rows[i].children[n].textContent = ''
        rows[i].children[n].classList.remove('active')
      }
    }
  }
}

reset.onclick = () => {
  for (let i = 0; i < rows.length; i++) {
    for (let n = 0; n < rows[i].children.length; n++) {
      rows[i].children[n].textContent = ''
      rows[i].children[n].classList.remove('active')
    }
  }
}

const setter = (element) => {
  element.onclick = () => {
    if (!isGameStarted) {
      if (element.classList.length === 2) {
        element.classList.remove('active')
      } else {
        element.classList.add('active')
      }
      cellsEnumerate()
    }
  }
}

for (let i = 0; i <= cells.length; i++) {
  const cell = cells[i]
  setter(cell)
}
