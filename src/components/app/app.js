import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ErrorBoundary from '../error-boundary';
import {PersonPage, PlanetPage, StarshipPage} from '../pages/';
import {RandomPlanet} from '../app-components';
import Header from '../header';

export default class App extends Component {
	render() {
		return (
			<ErrorBoundary>
				<Router>
					<Header />
					<RandomPlanet />

					<Route path="/people" component={PersonPage} />
					<Route path="/planets" component={PlanetPage} />
					<Route path="/starships" component={StarshipPage} />
				</Router>
			</ErrorBoundary>
		);
	}
}
