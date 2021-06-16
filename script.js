const changeColor = (newColor) => {
  var elem = document.getElementById('color-para');
  elem.style.color = newColor;
}

const flipColor = () => {
  var elem = document.querySelector('.bio')
  elem.style.color = 'white'
}

const findListItem = (selector) => {
  var elem = document.querySelector(selector)
  return elem
}