import React from 'react';
import {shallow} from 'enzyme';

import ItemList from './item-list';

describe('Component ItemList', () => {
	const data = [
		{id: '1', name: 'Test name'},
		{id: '2', name: 'Test name'},
	];
	const onListItemClick = jest.fn();
	const renderItem = (item) => item.name;
	const component = shallow(
		<ItemList data={data} renderItem={renderItem} onListItemClick={onListItemClick} />
	);

	it('Component rendered correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});

	describe('Component handlers', () => {
		it('onListItemClick has been called', () => {
			const item = component.find('.list-group-item:first-child');
			expect(onListItemClick).toBeCalledTimes(0);
			item.simulate('click');
			expect(onListItemClick).toBeCalledTimes(1);
			item.simulate('click');
			expect(onListItemClick).toBeCalledTimes(2);
		});
	});
});
