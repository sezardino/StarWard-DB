import React, {Component} from 'react';
import ErrorBoundary from '../error-boundary';
import {PersonPage, PlanetPage, StarshipPage} from '../pages/';
// import RandomPlanet from '../random-planet/';
import {RandomPlanet} from '../app-components';
import Header from '../header';

export default class App extends Component {
	render() {
		return (
			<ErrorBoundary>
				<Header />

				<RandomPlanet />

				<PersonPage />
				<PlanetPage />
				<StarshipPage />
			</ErrorBoundary>
		);
	}
}
