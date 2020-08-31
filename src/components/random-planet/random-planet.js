import React, {Component} from 'react';
import DataBase from '../../api';
import './random-planet.css';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

export default class RandomPlanet extends Component {
	DataBase = new DataBase();

	state = {
		planet: {},
		loading: true,
		error: false,
	};

	componentDidMount() {
		this.updatePlanet();
		this.interval = setInterval(this.updatePlanet, 5000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	onPlanetLoad = (planet) => {
		this.setState({planet, loading: false});
	};

	onError = (error) => {
		this.setState({error: true, loading: false});
		console.error(error);
	};

	updatePlanet = () => {
		const id = Math.floor(Math.random() * 25) + 1;
		this.DataBase.getPlanet(id).then(this.onPlanetLoad).catch(this.onError);
	};

	render() {
		const {planet, loading, error} = this.state;

		const errorIndicator = error ? <ErrorIndicator /> : null;
		const spinner = loading ? <Spinner /> : null;
		const content = !(loading || error) ? <PlanetView planet={planet} /> : null;

		return (
			<div className="random-planet jumbotron rounded">
				{errorIndicator}
				{spinner}
				{content}
			</div>
		);
	}
}

const PlanetView = ({planet}) => {
	const {id, name, population, rotationPeriod, diameter} = planet;

	return (
		<>
			<img
				className="planet-image"
				src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
				alt={name}
			/>
			<div>
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<span className="term">Population</span>
						<span>{population}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Rotation Period</span>
						<span>{rotationPeriod}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Diameter</span>
						<span>{diameter}</span>
					</li>
				</ul>
			</div>
		</>
	);
};
