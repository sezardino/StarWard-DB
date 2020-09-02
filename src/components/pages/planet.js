import React, {PureComponent} from 'react';
import Row from '../row';
import {PlanetList, PlanetDetails} from '../app-components';

export default class PlanetPage extends PureComponent {
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
					<PlanetList renderItem={({name}) => `${name}`} onListItemClick={this.itemClickHandler} />
				}
				right={<PlanetDetails dataId={selectedItem} />}
			/>
		);
	}
}
