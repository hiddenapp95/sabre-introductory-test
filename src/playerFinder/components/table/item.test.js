import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import Item from './item';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

test('Cell contains prop data', () => {
    const dummyData = "dummy data";
    const wrapper = shallow(
        <Item data={dummyData} />
    );

    expect(wrapper.find('.table-cell').contains(dummyData)).toBe(true);
});

test('Cell color style matches color from prop', () => {
    const color = "green";
    const wrapper = shallow(
        <Item color={color} />
    );

    expect(wrapper.find('.table-cell').props().style.color).toBe(color);
});

test('Cell color style is black if there is no color prop', () => {
    const wrapper = shallow(
        <Item />
    );

    expect(wrapper.find('.table-cell').props().style.color).toBe("black");
});
