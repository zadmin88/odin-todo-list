import { showTasks } from './showTasks'

const showProjects = (projects, element, modal, modal3) => {
  element.innerHTML = ''
  const mainTasks = document.querySelector('.mainTasks')
  const name = document.createElement('h1')
  name.textContent = 'Projects'
  const ul = document.createElement('ul')
  projects.forEach((project) => {
    const li = document.createElement('li')
    li.textContent = `${project.name}`
    li.addEventListener('click', () => {
      window.currProject = []
      window.currProject.push(project)

      showTasks(project, mainTasks, modal, modal3)

      const items = ul.getElementsByTagName('li')
      for (let i = 0; i < items.length; ++i) {
        items[i].classList.remove('selected')
      }
      li.classList.add('selected')
    })
    ul.appendChild(li)
  })

  element.appendChild(name)
  element.appendChild(ul)

  return element
}

export { showProjects }
