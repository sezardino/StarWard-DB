import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ErrorBoundary from '../error-boundary';
import {PersonPage, PlanetPage, StarshipPage, SecretPage, LoginPage} from '../pages/';
import {RandomPlanet, StarshipDetails} from '../app-components';
import Header from '../header';

export default class App extends Component {
	state = {
		isLoggedIn: false,
	};

	logInHandler = () => this.setState(({isLoggedIn}) => ({isLoggedIn: !isLoggedIn}));

	render() {
		const {isLoggedIn} = this.state;

		return (
			<ErrorBoundary>
				<Router>
					<Header />
					<RandomPlanet />

					<Switch>
						<Route path="/" exact render={() => <h1>Welcome on Star Wars Data Base</h1>} />
						<Route path="/people/:id?" exact component={PersonPage} />
						<Route path="/planets" exact component={PlanetPage} />
						<Route path="/starships" exact component={StarshipPage} />
						<Route
							path="/starships/:id"
							render={({
								match: {
									params: {id},
								},
							}) => <StarshipDetails dataId={id} />}
						/>
						<Route
							path="/login"
							exact
							render={() => <LoginPage isLoggedIn={isLoggedIn} onLogin={this.logInHandler} />}
						/>
						<Route path="/secret" exact render={() => <SecretPage isLoggedIn={isLoggedIn} />} />
						<Route render={() => <h2>Page not found</h2>} />
					</Switch>
				</Router>
			</ErrorBoundary>
		);
	}
}
