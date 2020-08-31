import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonPage from '../person-page';
// import ItemList from '../item-list';
// import PersonDetails from '../person-details';

import './app.css';

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<RandomPlanet />

				<PersonPage />
			</div>
		);
	}
}
