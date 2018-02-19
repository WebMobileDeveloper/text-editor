import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from '../src/store/configureStore';


const initialState = {
  searchResult: [],
  InputPaneContent: '',
  OutputPaneContent: '',
};

const store = configureStore(initialState);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
