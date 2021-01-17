const darkModeBtn = document.getElementById('dark-mode-btn')
const bgColorClass = document.querySelector('.bg-color')
const tag = document.querySelector('.tag')


darkModeBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = 'black'
  document.body.style.color = "white"
  bgColorClass.style.color = 'black'
  darkModeBtn.textContent = 'Light Mode'
  darkModeBtn.style.color = 'black'
  darkModeBtn.style.backgroundColor = '#facf57'

  tag.style.backgroundColor = 'white'
  tag.style.color = 'black'

})
