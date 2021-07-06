import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/app';
import {Provider} from 'react-redux'

import store from './store'

import './assets/css/base.css'
import 'antd/dist/antd.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
