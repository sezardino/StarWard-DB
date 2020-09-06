import React from 'react';
import {shallow} from 'enzyme';

import {Record} from './item-details';

describe('Component Record', () => {
	const testData = {
		label: 'Test label',
		field: 'name',
		data: {id: '1', name: 'Test name', someData: 'Test data'},
	};
	const component = shallow(<Record {...testData} />);

	it('Component rendered correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
});
