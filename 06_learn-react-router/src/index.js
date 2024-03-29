import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import App from './App';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <React.Suspense fallback={<h4>Loading...</h4>}>
      <App />
    </React.Suspense>
  </HashRouter>
);
