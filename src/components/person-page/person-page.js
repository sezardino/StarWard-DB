import React, {Component} from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator';
import DataBase from '../../api';
import Row from '../row';
import ErrorBoundary from '../error-boundary';

export default class PersonPage extends Component {
	DataBase = new DataBase();

	state = {
		selectedItem: 5,
	};

	listItemHandler = (selectedItem) => {
		this.setState({selectedItem});
	};

	render() {
		const {selectedItem, hasError} = this.state;

		if (hasError) {
			return <ErrorIndicator />;
		}

		const itemList = (
			<ItemList
				getData={this.DataBase.getAllPeople}
				onListItemClick={this.listItemHandler}
				renderItem={({name, gender}) => `${name} | gender: ${gender}`}
			/>
		);

		const personDetails = <ItemDetails dataId={selectedItem} getData={this.DataBase.getPerson} />;
		const starshipDetails = <ItemDetails dataId={5} getData={this.DataBase.getStarship} />;

		return (
			<ErrorBoundary>
				{/* <Row left={itemList} right={personDetails} /> */}
				<Row left={personDetails} right={starshipDetails} />
			</ErrorBoundary>
		);
	}
}
