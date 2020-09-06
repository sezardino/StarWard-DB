import React from 'react';
import {withRouter} from 'react-router-dom';
import {StarshipsList} from '../../app-components';

const StarshipPage = ({history}) => {
	return (
		<StarshipsList
			renderItem={({name}) => `${name}`}
			onListItemClick={(itemId) => history.push(itemId)}
		/>
	);
};

export {StarshipPage};
export default withRouter(StarshipPage);
