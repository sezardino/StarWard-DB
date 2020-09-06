import React from 'react';
import {shallow} from 'enzyme';

import {PersonPage} from './person';

describe('Component PersonPage', () => {
	const mockMatch = {params: {id: 'Test id'}};
	const component = shallow(<PersonPage match={mockMatch} />);
	it('Component rendered correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
});
