import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {countReducer} from './reducers/reducer';

const store = createStore(countReducer);

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ColorModeScript />
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
