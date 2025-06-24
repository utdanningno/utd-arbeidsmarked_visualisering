
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
}

export { default as Context2 } from "./Context2"
export { default as Context3 } from "./Context3"
export { getData as getData  }  from "./useData"

