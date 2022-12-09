
import React from 'react'
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import './index.css';
import { Application } from './App';
import {store} from './store/store.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.Fragment>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.Fragment>
);