const showTasks = (project, element, modal, modal3) => {
  element.innerHTML = ''
  const titleAddDiv = document.createElement('div')
  titleAddDiv.classList.add('titleAdd')

  const projectName = document.createElement('h1')
  projectName.innerText = `${project.name}`
  titleAddDiv.appendChild(projectName)

  if (project.name !== 'All Tasks' && project.name !== 'Completed Tasks') {
    const addTaskToProject = document.createElement('button')
    addTaskToProject.textContent = '+'
    addTaskToProject.classList.add('btnAddTask')
    addTaskToProject.addEventListener('click', (e) => {
      modal.style.display = 'block'
    })
    titleAddDiv.appendChild(addTaskToProject)
  }

  project.todos
    .sort((a, b) => b.state - a.state)
    .forEach((todo) => {
      const cardDiv = document.createElement('div')
      cardDiv.classList.add('card')
      if (todo.state === false) {
        cardDiv.classList.add('completed')
      }
      const stateChck = document.createElement('input')
      if (todo.state === false) {
        stateChck.checked = true
      }
      stateChck.setAttribute('id', 'state')
      stateChck.setAttribute('name', 'state')
      stateChck.setAttribute('type', 'checkbox')

      stateChck.addEventListener('change', function () {
        todo.changeState()
        cardDiv.classList.toggle('completed')
      })

      const title = document.createElement('h1')
      title.textContent = `${todo.title}`

      const description = document.createElement('p')
      description.textContent = `${todo.description}`

      const dueDate = document.createElement('p')
      dueDate.textContent = `${todo.dueDate}`

      const priority = document.createElement('p')
      priority.textContent = `${todo.priority}`

      const editBtn = document.createElement('button')
      editBtn.textContent = 'Edit'
      const deleteBtn = document.createElement('button')
      deleteBtn.textContent = 'Delete'

      deleteBtn.addEventListener('click', () => {
        const idxTodo = project.todos.findIndex((elm) => elm.id === todo.id)

        project.todos.splice(idxTodo, 1)

        showTasks(project, element, modal, modal3)
      })

      editBtn.addEventListener('click', () => {
        window.currTodo = {}
        window.currTodo = todo
        // const form3 = document.querySelector('.formData3')
        const title = document.getElementById('title')
        const description = document.getElementById('description')
        const dueDate = document.getElementById('dueDate')
        const priority = document.getElementById('priority')

        title.value = todo.title
        description.value = todo.description
        dueDate.value = todo.dueDate
        priority.value = todo.priority

        modal3.style.display = 'block'
      })

      cardDiv.appendChild(stateChck)
      cardDiv.appendChild(title)
      cardDiv.appendChild(description)
      cardDiv.appendChild(dueDate)
      cardDiv.appendChild(priority)
      cardDiv.appendChild(editBtn)
      cardDiv.appendChild(deleteBtn)

      element.appendChild(cardDiv)
    })

  element.prepend(titleAddDiv)

  return element
}

export { showTasks }
