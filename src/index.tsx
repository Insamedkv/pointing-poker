import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { SocketService } from 'services/socketService';
import { App } from './App';
import { store } from './redux/store';
import './styles.scss';

export const socket = new SocketService();
socket.init();
socket.test();

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
