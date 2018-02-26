import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style/font.css';
import './style/App.css';
import './style/mb.balloon.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();