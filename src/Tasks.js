import Task from './Task'

class Tasks {
  _storageKey = 'todos'

  constructor() {
    this.container = document.querySelector('.list-container')
    this.tasks = this._readData()

    this.render()
  }

  _readData() {
    const storedTasks = localStorage.getItem(this._storageKey)
    const parsedTasks = JSON.parse(storedTasks)

    const res = parsedTasks.map(task => new Task(task))
    return res
  }

  addTask(value) {
    const task = new Task({
      title: value,
    })
    this.tasks.push(task)

    this.render()
  }

  restore() {
    this.tasks = this._readData()
    this.render()
  }

  save() {
    localStorage.setItem(this._storageKey, JSON.stringify(this.tasks))
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
