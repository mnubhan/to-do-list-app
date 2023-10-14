import tasks from './Tasks.js'

const inputBox = document.querySelector('.input-box')
inputBox.addEventListener('keyup', e => {
  if (e.key === 'Enter' && inputBox.value.trim() !== '') {
    tasks.addTask(inputBox.value)
    inputBox.value = ''
  }
})
const addButton = document.querySelector('.add-button')
addButton.addEventListener('click', () => {
  tasks.addTask(inputBox.value)
})

const saveButton = document.querySelector('.main-actions--save')
saveButton.addEventListener('click', tasks.save.bind(tasks))

const restoreButton = document.querySelector('.main-actions--restore')
restoreButton.addEventListener('click', tasks.restore.bind(tasks))

const exportButton = document.querySelector('.main-actions--export')
exportButton.addEventListener('click', tasks.export.bind(tasks))
