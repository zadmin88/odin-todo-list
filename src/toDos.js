import { v4 as uuidv4 } from 'uuid'

const todoActions = {
  changeState() {
    if (this.state) {
      return (this.state = false)
    } else {
      return (this.state = true)
    }
  },

  changePriority(priority) {
    return (this.priority = priority)
  },
}

const createTodo = (title, description, dueDate, priority) => {
  let todo = Object.create(todoActions)
  todo.id = uuidv4()
  todo.title = title
  todo.description = description
  todo.dueDate = dueDate
  todo.priority = priority
  todo.state = true
  return todo
}

export { createTodo }
