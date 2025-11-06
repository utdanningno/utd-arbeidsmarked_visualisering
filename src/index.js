import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';

const container = document.getElementById('root');

if (container) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    container
  );
}

export { default as Context2 } from './Context2';
export { default as Context3 } from './Context3';
export { getData as getData } from './useData';
