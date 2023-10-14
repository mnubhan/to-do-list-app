import { addTask } from './addTask.js'
import tasks from './Tasks.js'

const inputBox = document.querySelector('.input-box')
inputBox.addEventListener('keyup', e => {
  e.key === 'Enter' && inputBox.value !== ''
    ? addTask(inputBox.value, inputBox)
    : null
})
const addButton = document.querySelector('.add-button')
addButton.addEventListener('click', () => {
  addTask(inputBox.value, inputBox)
})

const saveButton = document.querySelector('.main-actions--save')
saveButton.addEventListener('click', tasks.save.bind(tasks))

const restoreButton = document.querySelector('.main-actions--restore')
restoreButton.addEventListener('click', tasks.restore.bind(tasks))
