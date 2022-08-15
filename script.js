const container = document.querySelector('#container')

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows)
  container.style.setProperty('--grid-cols', cols)

  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement('div')
    // cell.innerText = c + 1
    container.appendChild(cell).className = 'grid-item'
  }
}

makeRows(32, 32)

const gridItem = document.querySelectorAll('.grid-item')

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

gridItem.forEach((item) => {
  // item.addEventListener('click', function() {
  //   item.classList.add('colored')
  // })
  item.addEventListener('mouseover', (e) => {
    if (mouseDown) {
      item.classList.add('colored')
    }
  })
})
