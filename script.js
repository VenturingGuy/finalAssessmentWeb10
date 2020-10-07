// headline element
const display = document.querySelector('#display')

// size input field
const inputSize = document.querySelector('#input-size')

// value display
const showSize = document.querySelector('#show-size')

// family input field
const selectFamily = document.querySelector('#select-font')

// value display
const showFamily = document.querySelector('#show-font')

// color input field
const inputColor = document.querySelector('#input-color')

// value display
const showColor = document.querySelector('#show-color')

// background color input field
const inputBGColor = document.querySelector('#input-bg-color')

// value display
const showBGColor = document.querySelector('#show-bg-color')

// text input field
const enterText = document.querySelector('#enter-text')


inputSize.addEventListener('input', handleInput)

selectFamily.addEventListener('input', handleFamily)

inputColor.addEventListener('input', handleColor)

inputBGColor.addEventListener('input', handleBG)

enterText.addEventListener('input', handleEnter)

function handleInput() {
  // get font size
  const fontSize = inputSize.value
  // set style
  display.style.fontSize = fontSize + 'px'
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

function handleEnter() {
    // get text
    const text = enterText.value
    // set and show text
    display.innerHTML = text
}