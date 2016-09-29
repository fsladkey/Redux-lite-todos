import React, { Component } from 'react';
import { connect, bindActionCreators } from '../../redux-lite';
import TodoItem from './TodoItem';
import { fetchTodos } from '../actions/todoActions';

class TodoList extends Component {

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <ul>
        {
          this.props.todos.map(todo => <TodoItem key={ todo.id } todo={ todo }/>)
        }
      </ul>
    )
  }
};


function mapStateToProps({ todos }) {
  return { todos };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTodos }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
