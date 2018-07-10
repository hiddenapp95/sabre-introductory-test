import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import NumberFilter from './numberFilter';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });


test('One input is beeing rendered if filter prop is defined', () => {
    const wrapper = shallow(
        <NumberFilter filter={{}}/>
    );
    expect(wrapper.find('.input-filter')).toHaveLength(1);
});

test('No input is beeing rendered if filter prop not is defined', () => {
    const wrapper = shallow(
        <NumberFilter />
    );
    expect(wrapper.find('.input-filter')).toHaveLength(0);
});

test('Execute callback when text changes and event doesnt match the conditions', () => {
    const callback = jest.fn();
    const event = {target: {name: "name", value: 4}};
    const wrapper = shallow(
        <NumberFilter filter={{name:"filterName",min:5,max:9}} filterPlayersBy={callback}/>
    );

    wrapper.find('.input-filter').simulate('change',event);

    expect(callback).toBeCalled();
});

test('Execute callback when text changes and matches the conditions', () => {
    const callback = jest.fn();
    const event = {target: { value: 25}};
    const wrapper = shallow(
        <NumberFilter filter={{name:"filterName",inputType:"number",min:20,max:80}} filterPlayersBy={callback}/>
    );

    wrapper.find('.input-filter').simulate('change',event);

    expect(callback).toBeCalled();
});



test('Execute callback on clear icon click', () => {
    const callback = jest.fn();
    const event = {target: {name: "name", value: 20}};
    const wrapper = mount(
        <NumberFilter filter={{name:"filterName",inputType:"number"}} filterPlayersBy={callback}/>
    );

    wrapper.find('.clear-filter-icon').first().simulate('click',event);

    expect(callback).toBeCalled();
});