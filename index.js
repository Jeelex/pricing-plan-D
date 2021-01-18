const darkModeBtn = document.getElementById('dark-mode-btn')
const bgColorClass = document.querySelector('.bg-color')
const tag = document.querySelector('.tag')
const lightModeBtn = document.getElementById('light-mode-btn')

darkModeBtn.addEventListener('click', () => {
  if (document.body.style.backgroundColor === 'black') {
    lightMode()
  } else {
    darkMode()
  }
})

// functions
function darkMode() {
  document.body.style.backgroundColor = 'black'
  document.body.style.color = 'white'
  bgColorClass.style.color = 'black'

  tag.style.backgroundColor = 'white'
  tag.style.color = 'black'
}

function lightMode() {
  document.body.style.backgroundColor = 'white'
  document.body.style.color = 'initial'
  bgColorClass.style.color = 'initial'

  tag.style.backgroundColor = 'black'
  tag.style.color = 'white'
}
