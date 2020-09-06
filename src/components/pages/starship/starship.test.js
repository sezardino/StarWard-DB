import React from 'react';
import {shallow} from 'enzyme';

import {StarshipPage} from './starship';

describe('Component StarshipPage', () => {
	const mockMatch = {params: {id: 'Test id'}};
	const component = shallow(<StarshipPage match={mockMatch} />);
	it('Component rendered correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
});
