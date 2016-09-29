import $ from 'jquery';

const apiUtil = {

  fetchTodos() {
    return $.ajax({
      url: "/api/todos",
      type: "GET"
    });
  },

  createTodo(todo) {
    return $.ajax({
      url: "/api/todos",
      type: "POST",
      dataType: "JSON",
      data: todo
    });
  }

}

export default apiUtil;
