const Todo = require('./resources/Todo');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/todos', function (req, res) {
  res.json(Todo.all());
});

app.post('/api/todos', function (req, res) {
  console.log(req.body);
  const todo = Todo.create(req.body);
  res.json(todo);
});

app.get('/api/todos/:id', function (req, res) {
  res.json(Todo.find(id));
});

app.use(express.static('public'));


Todo.create({ text: "One"});
Todo.create({ text: "Two"});

app.listen(8080, function () {
  console.log('Todo app listening on port 8080');
});
