import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigator from './Navigator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducer)}>
      <Navigator />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
