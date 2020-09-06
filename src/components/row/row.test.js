import React from 'react';
import {shallow} from 'enzyme';

import Row from './row';

describe('Component Row', () => {
	const leftContent = 'Hello';
	const rightContent = 'World';

	it('Component rendered correctly', () => {
		const row = shallow(<Row left={leftContent} right={rightContent} />);
		expect(row.debug()).toMatchSnapshot();
	});
});
