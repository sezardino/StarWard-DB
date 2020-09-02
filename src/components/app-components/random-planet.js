import RandomPlanet from '../random-planet';
import {withData, withConsumer, withRandom} from '../../hoc';

const mapMethodsToProps = (dataBase) => ({getData: dataBase.getPlanet});

const RandomPlanetWrapped = withConsumer(withRandom(withData(RandomPlanet)), mapMethodsToProps);

export default RandomPlanetWrapped;
