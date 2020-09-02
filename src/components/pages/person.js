import React, {PureComponent} from 'react';
import Row from '../row';
import {PersonList, PersonDetails} from '../app-components';

export default class PersonPage extends PureComponent {
	state = {
		selectedItem: null,
	};

	itemClickHandler = (selectedItem) => {
		this.setState({selectedItem});
	};

	render() {
		const {selectedItem} = this.state;
		return (
			<Row
				left={
					<PersonList renderItem={({name}) => `${name}`} onListItemClick={this.itemClickHandler} />
				}
				right={<PersonDetails dataId={selectedItem} />}
			/>
		);
	}
}
