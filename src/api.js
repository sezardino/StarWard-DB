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
		return data.results;
	}

	async getAllStarships() {
		const data = await this.getResources(URL.ALL_STARSHIPS());
		return data.results;
	}

	async getAllPlanets() {
		const data = await this.getResources(URL.ALL_PLANETS());
		return data.results;
	}

	getPerson(id) {
		return this.getResources(URL.PERSON(id));
	}

	getStarship(id) {
		return this.getResources(URL.STARSHIP(id));
	}

	getPlanet(id) {
		return this.getResources(URL.PLANET(id));
	}
}

export default DataBase;
