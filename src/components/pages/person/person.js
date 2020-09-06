import React from 'react';
import {withRouter} from 'react-router-dom';
import Row from '../../row';
import {PersonList, PersonDetails} from '../../app-components';

const PersonPage = ({history, match}) => {
	let id = match.params.id ? match.params.id : null;

	return (
		<Row
			left={
				<PersonList renderItem={({name}) => `${name}`} onListItemClick={(id) => history.push(id)} />
			}
			right={<PersonDetails dataId={id} />}
		/>
	);
};

export {PersonPage};
export default withRouter(PersonPage);
