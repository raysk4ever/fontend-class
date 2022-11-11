const todos = []

function addTodo (task, priority) {
  const todo = {
    task,
    priority
  }
  todos.push(todo)
}

function removeTodo(task) {
  // search: indexOf, findIndex, includes
  const index = todos.findIndex(todo => todo.task === task)
  if (index !== -1) {
    console.log('index', index)
    // remove/update: shift, pop, slice, splice
    todos.splice(index, 1)
  }
}
function updateTodo(task, newTask) {
  // search: indexOf, findIndex, includes
  const index = todos.findIndex(todo => todo.task === task)
  if (index !== -1) {
    console.log('index', index)
    // remove/update: shift, pop, slice, splice
    const currentTask = todos[index]
    currentTask.task = newTask
    todos.splice(index, 1, currentTask)
  }
}


function displayTodo() {
  todos.forEach(function (value) {
    console.log(`Task: ${value.task} | Priority: ${value.priority}`)
  })
}


addTodo('Learn Js', 'High')
addTodo('Drink Water', 'High')
addTodo('goto gym', 'low')

displayTodo()


removeTodo('Drink Water')


displayTodo()

addTodo('ajksdjkabsd kajjbsd a', 'High')

displayTodo()

updateTodo('ajksdjkabsd kajjbsd a', 'My New Task')

displayTodo()