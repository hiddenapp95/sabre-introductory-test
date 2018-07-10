import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import SelectFiler from './selectFilter';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });


test('One select is beeing rendered if filter prop is defined', () => {
    const wrapper = shallow(
        <SelectFiler filter={{options:[]}}/>
    );
    expect(wrapper.find('.select-filter')).toHaveLength(1);
});

test('No select is beeing rendered if filter prop not is defined', () => {
    const wrapper = shallow(
        <SelectFiler />
    );
    expect(wrapper.find('.select-filter')).toHaveLength(0);
});

test('Execute callback when input changes', () => {
    const callback = jest.fn();
    const event = {target: {name: "name", value: "spam"}};
    const wrapper = shallow(
        <SelectFiler filter={{name:"filterName"}} filterPlayersBy={callback}/>
    );

    wrapper.find('.select-filter').simulate('change',event);

    expect(callback).toBeCalled();
});

test('Only one option is rendered if no options passed', () => {
    const wrapper = shallow(
        <SelectFiler filter={{name:"filterName"}} />
    );
    expect(wrapper.find('option')).toHaveLength(1);
});

test('Two option are rendered if options passed with 1 item', () => {
    const wrapper = shallow(
        <SelectFiler filter={{name:"filterName",options:["test"]}} />
    );
    expect(wrapper.find('option')).toHaveLength(2);
});
