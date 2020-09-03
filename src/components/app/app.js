import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ErrorBoundary from '../error-boundary';
import {PersonPage, PlanetPage, StarshipPage} from '../pages/';
import {RandomPlanet, StarshipDetails} from '../app-components';
import Header from '../header';

export default class App extends Component {
	render() {
		return (
			<ErrorBoundary>
				<Router>
					<Header />
					<RandomPlanet />

					<Route path="/" exact render={() => <h1>Welcome on Star Wars Data Base</h1>} />
					<Route path="/people/:id?" exact component={PersonPage} />
					<Route path="/planets" exact component={PlanetPage} />
					<Route path="/starships/" exact component={StarshipPage} />
					<Route
						path="/starships/:id"
						render={({
							match: {
								params: {id},
							},
						}) => <StarshipDetails dataId={id} />}
					/>
				</Router>
			</ErrorBoundary>
		);
	}
}
