import React, {Component} from 'react';
import DataBase from '../../api';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';

import './person-details.css';

export default class PersonDetails extends Component {
	DataBase = new DataBase();

	state = {
		selectedPerson: null,
		loading: true,
		error: false,
	};

	componentDidUpdate(prevProps) {
		if (this.props.dataId !== prevProps.dataId) {
			this.updatePerson();
		}
	}

	onPersonLoad = (selectedPerson) => {
		this.setState({selectedPerson, loading: false});
	};

	onError = (error) => {
		this.setState({loading: false, error: true});
		console.error(error);
	};

	updatePerson = () => {
		const {dataId} = this.props;
		this.DataBase.getPerson(dataId).then(this.onPersonLoad).catch(this.onError);
	};

	render() {
		const {selectedPerson, loading, error} = this.state;
		const spinner = loading ? <Spinner /> : null;
		const errorIndicator = error ? <ErrorIndicator /> : null;
		const personDetails = !(loading || error) ? <PersonDetailsView data={selectedPerson} /> : null;

		if (!selectedPerson) {
			return <p>Choose a character</p>;
		}
		return (
			<React.Fragment>
				{spinner}
				{errorIndicator}
				{personDetails}
			</React.Fragment>
		);
	}
}

const PersonDetailsView = (props) => {
	const {id, name, gender, birthYear, eyeColor} = props.data;
	return (
		<div className="person-details card">
			<img
				className="person-image"
				src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
				alt={name}
			/>

			<div className="card-body">
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<span className="term">Gender</span>
						<span>{gender}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Birth Year</span>
						<span>{birthYear}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Eye Color</span>
						<span>{eyeColor}</span>
					</li>
					<ErrorButton />
				</ul>
			</div>
		</div>
	);
};
