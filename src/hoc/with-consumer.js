import React from 'react';
import {Consumer} from '../provider';

const withConsumer = (Component, mapMethodsToProps) => {
	return (props) => (
		<Consumer>
			{(dataBase) => {
				const serviceProps = mapMethodsToProps(dataBase);
				return <Component {...props} {...serviceProps} />;
			}}
		</Consumer>
	);
};
export default withConsumer;
