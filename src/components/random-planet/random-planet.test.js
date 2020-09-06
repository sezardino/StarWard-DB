import React from 'react';
import {shallow} from 'enzyme';

import RandomPlanet from './random-planet';

describe('Component RandomPlanet', () => {
	const mockData = {
		name: 'Test name',
		population: 'Test population',
		rotationPeriod: 'Test period',
		diameter: 'Test diameter',
		img: 'Test img',
	};
	const component = shallow(<RandomPlanet data={mockData} />);
	const componentWithoutData = shallow(<RandomPlanet />);

	it('Component rendered correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});

	it('Component doest render without data', () => {
		expect(componentWithoutData.isEmptyRender()).toBe(true);
	});
});
