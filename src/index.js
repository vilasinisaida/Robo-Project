import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import 'tachyons';
//import CardList from './CardList';
//import {robos} from './robos';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
			<App />
			 , document.getElementById('root'));


serviceWorker.unregister();
