import React, {Component} from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './item-list.css';

export default class ItemList extends Component {
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
		const {getData} = this.props;
		getData().then(this.onListLoad).catch(this.onError);
	};

	render() {
		const {onListItemClick, renderItem} = this.props;
		const {listItems, loading, error} = this.state;
		const spinner = loading ? <Spinner /> : null;
		const errorIndicator = error ? <ErrorIndicator /> : null;
		const list = !(loading || error) ? (
			<ListView items={listItems} onItemClick={onListItemClick} renderItem={renderItem} />
		) : null;

		return (
			<React.Fragment>
				{spinner}
				{errorIndicator}
				{list}
			</React.Fragment>
		);
	}
}

const ListView = ({items, onItemClick, renderItem}) => {
	return (
		<ul className="item-list list-group">
			{items.map((item) => {
				const {id} = item;
				const label = renderItem(item);
				return (
					<li key={id} className="list-group-item" onClick={() => onItemClick(id)}>
						{label}
					</li>
				);
			})}
		</ul>
	);
};
