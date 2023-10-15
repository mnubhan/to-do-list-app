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
  if (inputBox.value.trim() !== '') {
    tasks.addTask(inputBox.value)
    inputBox.value = ''
  }
})

const saveButton = document.querySelector('.main-actions--save')
saveButton.addEventListener('click', tasks.save.bind(tasks))

const restoreButton = document.querySelector('.main-actions--restore')
restoreButton.addEventListener('click', tasks.restore.bind(tasks))

const exportButton = document.querySelector('.main-actions--export')
exportButton.addEventListener('click', tasks.export.bind(tasks))

const uploadInput = document.querySelector('#upload-file')
const uploadButton = document.querySelector('.main-actions--upload')
uploadButton.addEventListener('click', () => {
  uploadInput.click()
})

uploadInput.addEventListener('change', () => {
  const file = uploadInput.files[0]
  const reader = new FileReader()

  reader.onload = e => {
    tasks.upload(e.target.result)
    uploadInput.value = null
  }

  reader.readAsText(file)
})
