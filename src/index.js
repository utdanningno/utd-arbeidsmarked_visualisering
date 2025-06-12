import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

export { default as Context2 } from './Context2';
export { default as Context3 } from './Context3';
export { getData as getData } from './useData';
