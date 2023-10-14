import Task from './Task'

class Tasks {
  _storageKey = 'todos'

  constructor() {
    this.container = document.querySelector('.list-container')
    this.tasks = this._readData()

    this.container.addEventListener(
      'delete-task',
      this._deleteHandler.bind(this)
    )
    this.render()
  }

  _deleteHandler(e) {
    const task = e.target.closest('li')
    console.log('found task', task)
    if (!task) return

    const index = +task.dataset.taskIndex
    console.log('removing task', index)
    this.removeTask(index)
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

  removeTask(index) {
    if (index >= this.tasks.length) return

    this.tasks = this.tasks.filter((_, ind) => ind !== index)
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

    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i]
      const taskEle = task.markup()
      taskEle.dataset.taskIndex = i

      this.container.appendChild(taskEle)
    }
  }
}

const tasks = new Tasks()
export default tasks
