import React, { Component } from 'react';
import { connect, bindActionCreators } from '../../redux-lite';

import { createTodo } from '../actions/todoActions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { text: "" };
  }

  handleChange(e) {
    this.setState({ text: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo(this.state)
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input type="text" onChange={ this.handleChange } value={ this.state.text }/>
      </form>
    )
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createTodo }, dispatch)
}

export default connect(null, mapDispatchToProps)(TodoForm)
