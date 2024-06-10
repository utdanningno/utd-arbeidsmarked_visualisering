
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export { default as Context2 } from "./Context2"
export { default as Context3 } from "./Context3"
export { getData as getData  }  from "./useData"

