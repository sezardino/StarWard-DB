import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends Component {
	state = {
		selectedItem: null,
	};

	listItemHandler = (selectedItem) => {
		this.setState({selectedItem});
	};

	render() {
		const {selectedItem} = this.state;
		return (
			<div>
				<Header />
				<RandomPlanet />

				<div className="row mb2">
					<div className="col-md-6">
						<ItemList onListItemClick={this.listItemHandler} />
					</div>
					<div className="col-md-6">
						<PersonDetails data={selectedItem} />
					</div>
				</div>
			</div>
		);
	}
}
