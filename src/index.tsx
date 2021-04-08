import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import StateLoader from './store/actions/actions';

import './assets/styles/index.scss';
import 'bootstrap/dist/css/bootstrap.css';

import storage from './store/reducers/index';
import App from './App';

const stateLoader = new StateLoader();
const store = createStore(storage, stateLoader.loadState());
store.subscribe(() => {
  stateLoader.saveState(store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
