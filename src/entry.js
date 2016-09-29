import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#content");
  ReactDOM.render(<App/>, root);
});
