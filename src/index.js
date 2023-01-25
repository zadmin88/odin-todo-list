import './style.css'
import { createTodo } from './toDos'
import { createProject } from './projects'
import { showTasks } from './showTasks'
import { showProjects } from './showProjects'

let projects = []
window.currProject = []
window.currTodo = {}

const noProject = createProject('without Project')
const allTasksProject = createProject('All Tasks')
const completedTasks = createProject('Completed Tasks')

projects.push(noProject)
projects.push(allTasksProject)
projects.push(completedTasks)

const filteredProjects = projects
  .filter((project) => project.name !== 'All Tasks')
  .filter((project) => project.name !== 'Completed Tasks')

const modal = document.getElementById('myModal')
const modal2 = document.getElementById('myModal2')
const modal3 = document.getElementById('myModal3')
const addTask = document.querySelector('.addTask')
const allTasks = document.querySelector('.allTasks')
const form = document.querySelector('.formData')
const form2 = document.querySelector('.formData2')
const form3 = document.querySelector('.formData3')
const mainTasks = document.querySelector('.mainTasks')
const completeTasks = document.querySelector('.completeTasks')
const addProject = document.querySelector('.addProject')
const projectsDiv = document.querySelector('.projects')

addTask.addEventListener('click', () => {
  modal.style.display = 'block'
})

showProjects(filteredProjects, projectsDiv, modal, modal3)

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const formData = new FormData(form)
  const title = `${formData.get('title')}`
  const description = `${formData.get('description')}`
  const dueDate = `${formData.get('dueDate')}`
  const priority = `${formData.get('priority')}`

  const todo = createTodo(title, description, dueDate, priority)
  if (window.currProject.length === 0) {
    noProject.addTodo(todo)
    showTasks(noProject, mainTasks, modal, modal3)
  } else {
    window.currProject[0].addTodo(todo)
    showTasks(window.currProject[0], mainTasks, modal, modal3)
  }

  form.reset()
  modal.style.display = 'none'
})

form3.addEventListener('submit', (e) => {
  e.preventDefault()

  const formData = new FormData(form3)
  window.currTodo.title = `${formData.get('title')}`
  window.currTodo.description = `${formData.get('description')}`
  window.currTodo.dueDate = `${formData.get('dueDate')}`
  window.currTodo.priority = `${formData.get('priority')}`

  if (window.currProject.length === 0) {
    showTasks(noProject, mainTasks, modal, modal3)
  } else {
    showTasks(window.currProject[0], mainTasks, modal, modal3)
  }
  form3.reset()
  modal3.style.display = 'none'
})

form2.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(form2)
  const name = `${formData.get('name')}`

  filteredProjects.push(createProject(name))

  showProjects(filteredProjects, projectsDiv, modal, currProject)
  form2.reset()
  modal2.style.display = 'none'
})

allTasks.addEventListener('click', () => {
  allTasksProject.todos = []
  filteredProjects.forEach((project) => {
    allTasksProject.todos = allTasksProject.todos.concat(project.todos)
  })

  showTasks(allTasksProject, mainTasks, modal)
})

completeTasks.addEventListener('click', () => {
  completedTasks.todos = []
  filteredProjects.forEach((project) => {
    completedTasks.todos = completedTasks.todos.concat(
      project.todos.filter((todo) => todo.state === false)
    )
  })

  showTasks(completedTasks, mainTasks, modal)
})

addProject.addEventListener('click', () => {
  modal2.style.display = 'block'
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }

  if (event.target == modal2) {
    modal2.style.display = 'none'
  }

  if (event.target == modal3) {
    modal3.style.display = 'none'
  }
}

// const todo1 = createTodo(
//   'estidar',
//   'estudiar mucho',
//   '22/01/2023',
//   'high',
//   'true'
// )

// const todo2 = createTodo(
//   'estidar2',
//   'estudiar mucho',
//   '22/01/2023',
//   'high',
//   'true'
// )
// todo1.changeState()
// todo1.changePriority('low')

// const project1 = createProject('pruebas')
// project1.addTodo(todo1)
// project1.addTodo(todo2)

// project1.deleteTodo(todo1.id)

// console.log(project1)
