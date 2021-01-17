const darkModeBtn = document.getElementById('dark-mode-btn')
const bgColorClass = document.querySelector('.bg-color')
const tag = document.querySelector('.tag')
const lightModeBtn = document.getElementById('light-mode-btn')

// Dark Mode Button
darkModeBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = 'black'
  document.body.style.color = "white"
  bgColorClass.style.color = 'black'

  tag.style.backgroundColor = 'white'
  tag.style.color = 'black'

  darkModeBtn.style.display = 'none'
  lightModeBtn.style.display = 'unset'

})

// Light Mode Button
lightModeBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = 'initial'
  document.body.style.color = "initial"
  bgColorClass.style.color = 'initial'

  tag.style.backgroundColor = 'black'
  tag.style.color = 'white'

  darkModeBtn.style.display = 'initial'
  lightModeBtn.style.display = 'none'
})


