import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Adjust this path to your main component

// Find the root element in your HTML
const rootElement = document.getElementById('root');

// Create a root and render the app
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}