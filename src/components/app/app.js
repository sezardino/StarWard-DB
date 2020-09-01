import React, {Component} from 'react';
import ErrorBoundary from '../error-boundary';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonPage from '../person-page';
import ItemList from '../item-list';
import ItemDetails from '../item-details';

import './app.css';
import DataBase from '../../api';

export default class App extends Component {
	DataBase = new DataBase();

	render() {
		return (
			<ErrorBoundary>
				<Header />
				<RandomPlanet />
				<PersonPage />

				{/* <div className="row mb2">
					<div className="col-md-6">
						<ItemList
							getData={this.DataBase.getAllStarships}
							onListItemClick={this.listItemHandler}
							renderItem={({name, model}) => `${name} | model: ${model}`}
						/>
					</div>
					{/* <div className="col-md-6"><PersonDetails dataId={selectedItem} /></div> */}
				{/* </div> */}

				{/* <div className="row mb2">
					<div className="col-md-6">
						<ItemList
							getData={this.DataBase.getAllPlanets}
							onListItemClick={this.listItemHandler}
							renderItem={({name, diameter}) => `${name} | diameter: ${diameter}`}
						/>
					</div>
					{/* <div className="col-md-6"><PersonDetails dataId={selectedItem} /></div> */}
				{/* </div>  */}
			</ErrorBoundary>
		);
	}
}
