import React, {PureComponent} from 'react';
import Row from '../row';
import {StarshipsList, StarshipDetails} from '../app-components';

export default class StarshipPage extends PureComponent {
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
					<StarshipsList
						renderItem={({name}) => `${name}`}
						onListItemClick={this.itemClickHandler}
					/>
				}
				right={<StarshipDetails dataId={selectedItem} />}
			/>
		);
	}
}
