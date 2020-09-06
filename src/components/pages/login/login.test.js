import React from 'react';
import {shallow} from 'enzyme';

import LoginPage from './login';

describe('Component LoginPage', () => {
	const onLogin = jest.fn();
	const component = shallow(<LoginPage onLogin={onLogin} />);
	it('Component rendered correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});

	describe('Components handlers', () => {
		it('Click on login button call onLogin', () => {
			const loginButton = component.find('button');
			expect(onLogin).toBeCalledTimes(0);
			loginButton.simulate('click');
			expect(onLogin).toBeCalledTimes(1);
		});
	});
});
