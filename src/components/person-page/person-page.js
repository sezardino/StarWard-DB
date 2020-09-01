import React, {Component} from 'react';
import ItemList from '../item-list';
import ItemDetails, {Record} from '../item-details';
import DataBase from '../../api';
import Row from '../row';
import ErrorBoundary from '../error-boundary';

import {withData} from '../../hoc';

const dataBase = new DataBase();
const ItemListWrapped = withData(ItemList, dataBase.getAllPeople);

export default class PersonPage extends Component {
	state = {
		selectedItem: 5,
	};

	listItemHandler = (selectedItem) => {
		this.setState({selectedItem});
	};

	render() {
		const {selectedItem} = this.state;

		const itemList = (
			<ItemListWrapped
				onListItemClick={this.listItemHandler}
				renderItem={({name, gender}) => `${name} | gender: ${gender}`}
			/>
		);

		const personDetails = (
			<ItemDetails dataId={selectedItem} getData={dataBase.getPerson}>
				<Record field="gender" label="Gender" />
				<Record field="birthYear" label="Birth Year" />
				<Record field="eyeColor" label="Eye Color" />
			</ItemDetails>
		);
		const starshipDetails = (
			<ItemDetails dataId={5} getData={dataBase.getStarship}>
				<Record field="name" label="Name" />
				<Record field="length" label="Length" />
				<Record field="costInCredits" label="Cost" />
			</ItemDetails>
		);

		return (
			<ErrorBoundary>
				<Row left={itemList} right={personDetails} />
				{/* <Row left={personDetails} right={starshipDetails} /> */}
			</ErrorBoundary>
		);
	}
}
