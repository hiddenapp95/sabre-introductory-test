import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import Body from './body';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

test('Body has no rows if no prop player is passed', () => {
    const wrapper = shallow(
        <Body />
    );

    expect(wrapper.find(".table-row")).toHaveLength(0);
});

test('Body has no rows if players is an empty array', () => {
    const wrapper = shallow(
        <Body players={[]}/>
    );

    expect(wrapper.find(".table-row")).toHaveLength(0);
});

test('Body has 1 table row if players array has 1 element', () => {
    const wrapper = shallow(
        <Body players={[{name:"test"}]} />
    );

    expect(wrapper.find(".table-row")).toHaveLength(1);
});

test('Body has 5 table row if players array has 5 element', () => {
    const wrapper = shallow(
        <Body players={[{key1:"value1"},{key2:"value2"},{key3:"value3"},{key4:"value4"},{key5:"value5"}]} />
    );

    expect(wrapper.find(".table-row")).toHaveLength(5);
});
