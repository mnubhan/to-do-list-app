class Task {
  constructor(task, isFinished = false) {
    this.title = task
    this.isFinished = isFinished
  }

  _getTaskParagraph() {
    const para = document.createElement('p')
    para.textContent = this.title
    return para
  }

  _getCloseIcon() {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    path.setAttributeNS(null, 'fill-rule', 'evenodd')
    path.setAttributeNS(null, 'clip-rule', 'evenodd')
    path.setAttributeNS(
      null,
      'd',
      'M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z'
    )

    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    icon.classList.add('icon-remove-task')
    icon.setAttributeNS(null, 'stroke', 'currentColor')
    icon.setAttributeNS(null, 'fill', 'currentColor')
    icon.setAttributeNS(null, 'stroke-width', '0')
    icon.setAttributeNS(null, 'viewBox', '0 0 16 16')
    icon.setAttributeNS(null, 'height', '1em')
    icon.setAttributeNS(null, 'width', '1em')

    icon.appendChild(path)

    return icon
  }

  _getUncheckIcon() {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    path.setAttributeNS(
      null,
      'd',
      'M12,2C6.486,2,2,6.486,2,12c0.001,5.515,4.487,10.001,10,10.001c5.514,0,10-4.486,10.001-10.001 C22.001,6.486,17.515,2,12,2z M12,20.001c-4.41,0-7.999-3.589-8-8.001c0-4.411,3.589-8,8-8c4.412,0,8.001,3.589,8.001,8 C20,16.412,16.411,20.001,12,20.001z'
    )

    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    icon.classList.add('icon-uncheck')
    // Some of these attrs should be moved to the icon css class
    icon.setAttributeNS(null, 'stroke', 'currentColor')
    icon.setAttributeNS(null, 'fill', 'currentColor')
    icon.setAttributeNS(null, 'stroke-width', '0')
    icon.setAttributeNS(null, 'height', '2em')
    icon.setAttributeNS(null, 'width', '2em')
    icon.setAttributeNS(null, 'viewBox', '0 0 24 24')
    icon.appendChild(path)

    return icon
  }

  render(container) {
    const closeIcon = this._getCloseIcon()
    const uncheckIcon = this._getUncheckIcon()
    const taskEl = this._getTaskParagraph()
    const li = document.createElement('li')
    li.appendChild(uncheckIcon)
    li.appendChild(taskEl)
    li.appendChild(closeIcon)

    container.appendChild(li)
  }
}

export default Task
