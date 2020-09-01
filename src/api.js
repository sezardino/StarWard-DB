const URL = {
	API: () => `https://swapi.dev/api/`,
	IMG: () => `https://starwars-visualguide.com/assets/img/`,
	ALL_PEOPLE: () => `people/`,
	ALL_STARSHIPS: () => `starships/`,
	ALL_PLANETS: () => 'planets/',
	PERSON: (id) => `people/${id}/`,
	STARSHIP: (id) => `starships/${id}/`,
	PLANET: (id) => `planets/${id}/`,
	PERSON_IMG: (id) => `${URL.IMG()}/characters/${id}.jpg`,
	STARSHIP_IMG: (id) => `${URL.IMG()}/starships/${id}.jpg`,
	PLANET_IMG: (id) => `${URL.IMG()}/planets/${id}.jpg`,
};

class DataBase {
	getResources = async (url) => {
		const response = await fetch(`${URL.API()}${url}`);
		if (!response.ok) {
			throw new Error(`Error with ${url} error status ${response.status}`);
		}

		const data = await response.json();
		return data;
	};

	getAllPeople = async () => {
		const data = await this.getResources(URL.ALL_PEOPLE());
		return data.results.map(this._transformPerson);
	};

	getAllStarships = async () => {
		const data = await this.getResources(URL.ALL_STARSHIPS());
		return data.results.map(this._transformStarship);
	};

	getAllPlanets = async () => {
		const data = await this.getResources(URL.ALL_PLANETS());
		return data.results.map(this._transformPlanet);
	};

	getPerson = async (id) => {
		const data = await this.getResources(URL.PERSON(id));
		return this._transformPerson(data);
	};

	getStarship = async (id) => {
		const data = await this.getResources(URL.STARSHIP(id));
		return this._transformStarship(data);
	};

	getPlanet = async (id) => {
		const data = await this.getResources(URL.PLANET(id));
		return this._transformPlanet(data);
	};

	_getId = (string) => {
		const idRegEx = /\/([0-9]*)\/$/;
		return string.match(idRegEx);
	};

	_transformPlanet = (planet) => {
		const id = this._getId(planet.url)[1];
		return {
			id,
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter,
			img: URL.PLANET_IMG(id),
		};
	};

	_transformStarship = (starship) => {
		const id = this._getId(starship.url)[1];
		return {
			id,
			name: starship.name,
			model: starship.model,
			manufacturer: starship.manufacturer,
			costInCredits: starship.cost_in_credits,
			length: starship.length,
			crew: starship.crew,
			passengers: starship.passengers,
			cargoCapacity: starship.cargo_capacity,
			img: URL.STARSHIP_IMG(id),
		};
	};

	_transformPerson = (person) => {
		const id = this._getId(person.url)[1];
		return {
			id,
			name: person.name,
			gender: person.gender,
			birthYear: person.birth_year,
			eyeColor: person.eye_color,
			img: URL.PERSON_IMG(id),
		};
	};
}

export default DataBase;
