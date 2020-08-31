import React, {Component} from 'react';
import DataBase from '../../api';

import './item-list.css';

export default class ItemList extends Component {
	DataBase = new DataBase();

	state = {
		listItems: null,
	};

	componentDidMount() {
		this.updateList();
	}

	onListLoad = (listItems) => {
		this.setState({listItems});
	};

	updateList = () => {
		this.DataBase.getAllPeople().then(this.onListLoad);
	};

	render() {
		const {listItems} = this.state;
		const list = listItems ? <ListView items={this.state.listItems} /> : null;

		return <>{list}</>;
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
