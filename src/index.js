import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import dataReducer from './redux/fetchApiSlice'

const rootReducer = combineReducers({
  dataState : dataReducer
})

const store = configureStore({
  reducer: rootReducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
