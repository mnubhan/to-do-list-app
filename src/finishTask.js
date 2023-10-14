import { setAttributeList } from './setAttributeList.js'
export function finishTask(e) {
  const parentTask = e.target.closest('li')
  if (!parentTask) {
    return
  }

  parentTask.dataset.taskFinished = true
  const icon = e.target
  const task = icon.nextSibling
  task.setAttribute('style', 'text-decoration:line-through')
  setAttributeList(icon, {
    class: 'icon-check',
  })
  const newPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  setAttributeList(newPath, {
    d: 'M9.999 13.587L7.7 11.292 6.288 12.708 10.001 16.413 16.707 9.707 15.293 8.293z',
  })
  icon.appendChild(newPath)
  icon.style.transition = 'all 0.5s ease-in-out'
}
