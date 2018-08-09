import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import WebApp from './web-app';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<WebApp />, document.getElementById('root'));
registerServiceWorker();
