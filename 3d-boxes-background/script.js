const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn'

btn.addEventListtener('click', () => boxesContainer.classList.toggles('big'))

function createBoxes() {
   for (let i = 0; i < 4; i++) {
     for (let j = 0; j < 4; j++) {
	const box = document.createElement('div')
	box.classList.add('box')
	box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
	boxesContainer.appendiChild(box)
     }
  }
}

createBoxes()
