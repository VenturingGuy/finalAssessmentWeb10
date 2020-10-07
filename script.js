// headline element
const display = document.querySelector('#display')

// size input field
const inputSize = document.querySelector('#input-size')

// value display
const showSize = document.querySelector('#show-size')

const selectFamily = document.querySelector('#select-font')

const showFamily = document.querySelector('#show-font')

const inputColor = document.querySelector('#input-color')

const showColor = document.querySelector('#show-color')

const inputBGColor = document.querySelector('#input-bg-color')

const showBGColor = document.querySelector('#show-bg-color')

const inputText = document.querySelector('#display')




inputSize.addEventListener('input', handleInput)

selectFamily.addEventListener('input', handleFamily)

inputColor.addEventListener('input', handleColor)

inputBGColor.addEventListener('input', handleBG)

inputText.addEventListener('input', handleText)

function handleInput() {
  // get font size
  const fontSize = inputSize.value
  // set style
  display.style.fontSize = fontSize
  // show size
  showSize.innerHTML = fontSize
}

function handleFamily() {
    // get family
    const fontFamily = selectFamily.value
    // set family
    display.style.fontFamily = fontFamily
    // show family
    showFamily.innerHTML = fontFamily
}

function handleColor() {
    // get color
    const fontColor = inputColor.value
    // set color
    display.style.color = fontColor
    // show color
    showColor.innerHTML = fontColor
}

function handleBG() {
    // get background
    const backgroundColor = inputBGColor.value
    // set background
    display.style.backgroundColor = backgroundColor
    // show background
    showBGColor.innerHTML = backgroundColor
}

function handleText() {
    const inputText = inputText.value
    display.innerHTML = displayText
}