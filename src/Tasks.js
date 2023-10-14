import Task from './Task'

class Tasks {
  _storageKey = 'todos'

  constructor() {
    this.container = document.querySelector('.list-container')
    this.tasks = this._readData()

    this.render()
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
    const storedTasks = localStorage.getItem(this._storageKey)
    const parsedTasks = JSON.parse(storedTasks)

    const res = parsedTasks.map(task => new Task(task.task, task.isFinished))
    console.log(res)
    return res
  }

  addTask(value) {
    const task = new Task(value)
    this.tasks.push(task)

    this.render()
  }

  restore() {
    this.tasks = this._readData()
    this.render()
  }

  save() {
    localStorage.setItem(this._storageKey, JSON.stringify(this._getData()))
  }

  render() {
    this.container.innerHTML = ''

    for (const task of this.tasks) {
      task.render(this.container)
    }
  }
}

const tasks = new Tasks()
export default tasks
