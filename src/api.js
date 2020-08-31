const URL = {
	API: () => `https://swapi.dev/api/`,
	ALL_PEOPLE: () => `people/`,
	PERSON: (id) => `people/${id}/`,
	ALL_STARSHIPS: () => `starships/`,
	STARSHIP: (id) => `starships/${id}/`,
	ALL_PLANETS: () => 'planets/',
	PLANET: (id) => `planets/${id}/`,
};

class DataBase {
	async getResources(url) {
		const response = await fetch(`${URL.API()}${url}`);
		if (!response.ok) {
			throw new Error(`Error with ${url} error status ${response.status}`);
		}

		const data = await response.json();
		return data;
	}

	async getAllPeople() {
		const data = await this.getResources(URL.ALL_PEOPLE());
		return data.results.map(this._transformPerson);
	}

	async getAllStarships() {
		const data = await this.getResources(URL.ALL_STARSHIPS());
		return data.results.map(this._transformStarship);
	}

	async getAllPlanets() {
		const data = await this.getResources(URL.ALL_PLANETS());
		return data.results.map(this._transformPlanet);
	}

	async getPerson(id) {
		const data = await this.getResources(URL.PERSON(id));
		return this._transformPerson(data);
	}

	async getStarship(id) {
		const data = await this.getResources(URL.STARSHIP(id));
		return this._transformStarship(data);
	}

	async getPlanet(id) {
		const data = await this.getResources(URL.PLANET(id));
		return this._transformPlanet(data);
	}

	_getId(string) {
		const idRegEx = /\/([0-9]*)\/$/;
		return string.match(idRegEx);
	}

	_transformPlanet = (planet) => ({
		id: this._getId(planet.url)[1],
		name: planet.name,
		population: planet.population,
		rotationPeriod: planet.rotation_period,
		diameter: planet.diameter,
	});

	_transformStarship = (starship) => ({
		id: this._getId(starship.url)[1],
		name: starship.name,
		model: starship.model,
		manufacturer: starship.manufacturer,
		costInCredits: starship.cost_in_credits,
		length: starship.length,
		crew: starship.crew,
		passengers: starship.passengers,
		cargoCapacity: starship.cargo_capacity,
	});

	_transformPerson = (person) => ({
		id: this._getId(person.url)[1],
		name: person.name,
		gender: person.gender,
		birthYear: person.birth_year,
		eyeColor: person.eye_color,
	});
}

export default DataBase;
