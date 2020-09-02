import React from 'react';
import ErrorButton from '../error-button';

import './item-details.css';

const ItemDetails = (props) => {
	const {data, children} = props;
	if (!data) {
		return <p>Choose a character</p>;
	}
	const {name, img} = data;

	return (
		<div className="person-details card">
			<img className="person-image" src={img} alt={name} />

			<div className="card-body">
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					{React.Children.map(children, (child) => React.cloneElement(child, {data}))}
					<ErrorButton />
				</ul>
			</div>
		</div>
	);
};

const Record = (props) => {
	const {label, field, data} = props;
	return (
		<li className="list-group-item">
			<span className="term">{label}</span>
			<span>{data[field]}</span>
		</li>
	);
};

export {Record, ItemDetails};
