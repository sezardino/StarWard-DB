import React from 'react';
import {shallow} from 'enzyme';

import Header from './header';

describe('Component Header', () => {
	const component = shallow(<Header />);
	it('Component rendered correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
});
