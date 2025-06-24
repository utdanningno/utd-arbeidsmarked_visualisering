
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';


const root = document.getElementById('root');
ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


export { default as Context2 } from "./Context2"
export { default as Context3 } from "./Context3"
export { getData as getData  }  from "./useData"

