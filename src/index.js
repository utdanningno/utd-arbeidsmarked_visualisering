import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

export { default as Context2 } from './Context2';
export { default as Context3 } from './Context3';
export { getData as getData } from './useData';
