import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import HeaderRow from './headerRow';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

test('Header row has no columns if there is no headers prop', () => {
    const wrapper = shallow(
        <HeaderRow />
    );

    expect(wrapper.find('.header-cell')).toHaveLength(0);
});

test('Header row has 2 columns if headers prop has 2 items', () => {
    const wrapper = shallow(
        <HeaderRow headers={[{name:"hello"},{name:"world"}]} />
    );

    expect(wrapper.find('.header-cell')).toHaveLength(2);
});
