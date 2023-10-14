class Tasks {
  _storageKey = 'todos'

  constructor() {
    this.container = document.querySelector('.list-container')
  }

  _getData() {
    const allTask = this.container.querySelectorAll('li')
    const allTaskData = []

    allTask.forEach(taskEle => {
      const status = taskEle.dataset.taskFinished
      const task = taskEle.querySelector('p')

      allTaskData.push({
        task: task.textContent,
        isFinished: status === 'true',
      })
    })

    return allTaskData
  }

  _readData() {
    const tasks = localStorage.getItem(this._storageKey)
    return JSON.parse(tasks)
  }

  restore() {
    return this._readData()
  }

  save() {
    localStorage.setItem(this._storageKey, JSON.stringify(this._getData()))
  }
}

const tasks = new Tasks()
export default tasks
