const changeColor = (newColor) => {
  var elem = document.getElementById('color-para');
  elem.style.color = newColor;
}

const flipColor = () => {
  var elem = document.querySelector('.bio')
  elem.style.color = 'white'
}

const paintItBlack = () => {
  children = document.querySelectorAll('div');
  for(let i = 0; i < children.length; i++) {
    children[i].style.backgroundColor = 'black'
  }
}

const paintItBrightBlue = () => {
  children = document.querySelectorAll('div');
  for (let i = 0; i < children.length; i++) {
    children[i].style.backgroundColor = 'orange'
  }
}

const fixName = () => {
  nameInput = document.getElementById("name-change")
  profileName = document.getElementById("profile-name")
  if(nameInput.value == "" || null) {
    alert("ENTER SOMETHING")
  }
  profileName.innerHTML = nameInput.value +" AND DON'T FORGET IT"
}