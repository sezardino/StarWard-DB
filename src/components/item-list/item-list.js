import React from 'react';

import './item-list.css';

const ItemList = (props) => {
	const {data, onListItemClick, renderItem} = props;
	return (
		<ul className="item-list list-group">
			{data.map((item) => {
				const {id} = item;
				const label = renderItem(item);
				return (
					<li key={id} className="list-group-item" onClick={() => onListItemClick(id)}>
						{label}
					</li>
				);
			})}
		</ul>
	);
};

export default ItemList;
