import React from 'react';
import {shallow} from 'enzyme';

import SecretPage from './secret';

describe('Component SecretPage', () => {
	const component = shallow(<SecretPage isLoggedIn={false} />);
	it('Component rendered correctly when isLoggedIn is false', () => {
		expect(component.debug()).toMatchSnapshot();
	});
});
