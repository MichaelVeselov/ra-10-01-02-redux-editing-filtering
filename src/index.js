import React from 'react';
import ReactDOM from 'react-dom/client';

import { Root } from './Root';

import { configureStore } from './store/index';

import './index.css';

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>
);
