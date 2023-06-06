let theme = (localStorage.getItem('theme') == 'dark')
let element = document.body
let button = document.querySelector('#themeButton')

if (theme) {
  element.classList.add('dark')
  button.innerHTML = '☀️'
} else {
  button.innerHTML = '🌙'
}

function mode() {
  element.classList.toggle('dark')
  
  if (element.classList.value == 'dark') {
    localStorage.setItem('theme', "dark")
    button.innerHTML = '☀️'
  } else {
    localStorage.setItem('theme', "light")
    button.innerHTML = '🌙'
  }
}