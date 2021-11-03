import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './errorBoundaries/ErrorBoundaries';
import './index.css';
import App from './life-cycle_and_hooks/App';

const main = (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)

ReactDOM.render(main, document.getElementById('root'));