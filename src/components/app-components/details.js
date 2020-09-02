import React from 'react';
import ItemDetails, {Record} from '../item-details';

import {withData, withConsumer} from '../../hoc';

const mapPersonMethodsToProps = (dataBase) => ({getData: dataBase.getPerson});
const mapPlanetsMethodsToProps = (dataBase) => ({getData: dataBase.getPlanet});
const mapStarshipMethodsToProps = (dataBase) => ({getData: dataBase.getStarship});

const PersonDetailsWrapped = withConsumer(withData(ItemDetails), mapPersonMethodsToProps);
const PlanetDetailsWrapped = withConsumer(withData(ItemDetails), mapPlanetsMethodsToProps);
const StarshipDetailsWrapped = withConsumer(withData(ItemDetails), mapStarshipMethodsToProps);

const PersonDetails = (props) => (
	<PersonDetailsWrapped {...props}>
		<Record field="gender" label="Gender" />
		<Record field="birthYear" label="Birth Year" />
		<Record field="eyeColor" label="Eye Color" />
	</PersonDetailsWrapped>
);

const PlanetDetails = (props) => (
	<PlanetDetailsWrapped {...props}>
		<Record field="gender" label="Gender" />
		<Record field="birthYear" label="Birth Year" />
		<Record field="eyeColor" label="Eye Color" />
	</PlanetDetailsWrapped>
);

const StarshipDetails = (props) => (
	<StarshipDetailsWrapped {...props}>
		<Record field="gender" label="Gender" />
		<Record field="birthYear" label="Birth Year" />
		<Record field="eyeColor" label="Eye Color" />
	</StarshipDetailsWrapped>
);

export {PersonDetails, PlanetDetails, StarshipDetails};
