import React from 'react';
import {mount} from 'enzyme';

import {ItemDetails, Record} from './item-details';

describe('Component ItemDetails', () => {
	const testData = {
		id: '1',
		name: 'Test name',
		gender: 'Test gender',
		img: 'Test img',
		someData: 'Test data',
	};
	const component = mount(
		<ItemDetails data={testData}>
			<Record field="gender" label="gender label" data={testData} />
			<Record field="someData" label="Some label" data={testData} />
		</ItemDetails>
	);
	it('Component rendered correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
});
