import React, {Component} from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';

export default class PersonPage extends Component {
	state = {
		selectedPerson: null,
		hasError: false,
	};

	componentDidCatch() {
		this.setState({hasError: true});
	}

	listItemHandler = (selectedItem) => {
		this.setState({selectedItem});
	};

	render() {
		const {selectedItem, hasError} = this.state;

		if (hasError) {
			return <ErrorIndicator />;
		}

		return (
			<div className="row mb2">
				<div className="col-md-6">
					<ItemList onListItemClick={this.listItemHandler} />
				</div>
				<div className="col-md-6">
					<PersonDetails dataId={selectedItem} />
				</div>
			</div>
		);
	}
}
