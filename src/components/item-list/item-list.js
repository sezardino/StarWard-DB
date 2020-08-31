import React, {Component} from 'react';
import DataBase from '../../api';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './item-list.css';

export default class ItemList extends Component {
	DataBase = new DataBase();

	state = {
		listItems: null,
		loading: true,
		error: false,
	};

	componentDidMount() {
		this.updateList();
	}

	onListLoad = (listItems) => {
		this.setState({listItems, loading: false});
	};

	onError = (error) => {
		this.setState({error: true, loading: false});
		console.error(error);
	};

	updateList = () => {
		this.DataBase.getAllPeople().then(this.onListLoad).catch(this.onError);
	};

	render() {
		const {listItems, loading, error} = this.state;
		const spinner = loading ? <Spinner /> : null;
		const errorIndicator = error ? <ErrorIndicator /> : null;
		const list = !(loading || error) ? <ListView items={listItems} /> : null;

		return (
			<React.Fragment>
				{spinner}
				{errorIndicator}
				{list}
			</React.Fragment>
		);
	}
}

const ListView = ({items}) => {
	return (
		<ul className="item-list list-group">
			{items.map(({id, name}) => (
				<li key={id} className="list-group-item">
					{name}
				</li>
			))}
		</ul>
	);
};
