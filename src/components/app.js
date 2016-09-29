import React from 'react';
import { Provider } from '../../redux-lite';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

import store from '../store'

export default function App(props) {
  return (
    <Provider store={ store }>
      <TodoForm />
      <TodoList />
    </Provider>
  )
};
