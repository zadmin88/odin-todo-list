import { v4 as uuidv4 } from 'uuid'
const projectActions = {
  addTodo(todo) {
    return this.todos.push(todo)
  },

  deleteTodo(id) {
    const objIndex = this.todos.findIndex((todo) => todo.id === id)

    return this.todos.splice(objIndex, 1)
  },
}

const createProject = (name) => {
  let project = Object.create(projectActions)
  project.id = uuidv4()
  project.name = name
  project.todos = []

  return project
}

export { createProject }
