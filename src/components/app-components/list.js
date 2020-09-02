import ItemList from '../item-list';

import {withData, withConsumer} from '../../hoc';

const mapPersonMethodsToProps = (dataBase) => ({getData: dataBase.getAllPeople});
const mapPlanetsMethodsToProps = (dataBase) => ({getData: dataBase.getAllPlanets});
const mapStarshipMethodsToProps = (dataBase) => ({getData: dataBase.getAllStarships});

const PersonList = withConsumer(withData(ItemList), mapPersonMethodsToProps);
const PlanetList = withConsumer(withData(ItemList), mapPlanetsMethodsToProps);
const StarshipsList = withConsumer(withData(ItemList), mapStarshipMethodsToProps);

export {PersonList, PlanetList, StarshipsList};
