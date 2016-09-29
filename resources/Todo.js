let id = 1;

const todos = [];

const Todo = {

  all() {
    return todos.slice();
  },

  find(id) {
    return todos.find(todo => todo.id === id);
  },

  update(id, options) {
    return Object.assign(Todo.find(id), options);
  },

  create(options) {
    const todo = Object.assign(options, { id });
    id++;
    todos.push(todo);
    return todo;
  }

}

module.exports = Todo;
