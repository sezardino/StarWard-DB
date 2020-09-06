import React from 'react';
import {shallow} from 'enzyme';

import App from './app';
describe('Component App', () => {
	const app = shallow(<App />);

	it('Component App rendered correctly', () => {
		expect(app.debug()).toMatchSnapshot();
	});

	it('Have initial state isLoggedIn false', () => {
		expect(app.state().isLoggedIn).toBeFalsy();
	});

	it('Handler logInHandler change state', () => {
		app.instance().logInHandler();
		expect(app.state().isLoggedIn).toBeTruthy();
		app.instance().logInHandler();
		expect(app.state().isLoggedIn).toBeFalsy();
		app.instance().logInHandler();
		expect(app.state().isLoggedIn).toBeTruthy();
	});
});
