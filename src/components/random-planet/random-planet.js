import React, {Component} from 'react';
import DataBase from '../../api';
import './random-planet.css';

export default class RandomPlanet extends Component {
	DataBase = new DataBase();

	constructor() {
		super();
		this.updatePlanet();
	}

	state = {
		planet: {},
	};

	onPlanetLoad = (planet) => {
		this.setState({planet});
	};

	updatePlanet() {
		const id = Math.floor(Math.random() * 25) + 1;
		this.DataBase.getPlanet(id).then(this.onPlanetLoad);
	}

	render() {
		const {
			planet: {id, name, population, rotationPeriod, diameter},
		} = this.state;
		return (
			<div className="random-planet jumbotron rounded">
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
			</div>
		);
	}
}
