import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import DataBase from './api';
import {Provider} from './provider';

const dataBase = new DataBase();

ReactDOM.render(
	<Provider value={dataBase}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
