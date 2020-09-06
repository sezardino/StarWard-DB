import React from 'react';
import {shallow} from 'enzyme';

import PlanetPage from './planet';

describe('Component PlanetPage', () => {
	const mockMatch = {params: {id: 'Test id'}};
	const component = shallow(<PlanetPage match={mockMatch} />);
	it('Component rendered correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
});
