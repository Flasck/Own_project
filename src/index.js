import React from 'react'
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import './index.css';
import { Application } from './App';
import {store} from './store/store.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

// Enable dark theme
const darkTheme = localStorage.getItem("darkTheme");
if (darkTheme == "true" ||
    darkTheme == null && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.body.classList.add("darkTheme");

root.render(
  <React.Fragment>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.Fragment>
);