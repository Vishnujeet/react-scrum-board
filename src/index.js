import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';

import AppDragDrop from './components/AppDragDrop'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
