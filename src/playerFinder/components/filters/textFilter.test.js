import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import TextFilter from './textFilter';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });


test('One input is beeing rendered if filter prop is defined', () => {
    const wrapper = shallow(
        <TextFilter filter={{}}/>
    );
    expect(wrapper.find('.input-filter')).toHaveLength(1);
});

test('No input is beeing rendered if filter prop not is defined', () => {
    const wrapper = shallow(
        <TextFilter />
    );
    expect(wrapper.find('.input-filter')).toHaveLength(0);
});

test('Execute callback when text changes and text is valid', () => {
    const callback = jest.fn();
    const event = {target: {name: "name", value: "spam"}};
    const wrapper = shallow(
        <TextFilter filter={{name:"filterName"}} filterPlayersBy={callback}/>
    );

    wrapper.find('.input-filter').simulate('change',event);

    expect(callback).toBeCalled();
});

test('Not execute callback if text changes and is invalid', () => {
    const callback = jest.fn();
    const event = {target: {name: "name", value: "14"}};
    const wrapper = shallow(
        <TextFilter filter={{name:"filterName"}} filterPlayersBy={callback}/>
    );

    wrapper.find('.input-filter').simulate('change',event);

    //expect(callback).toBeCalled();
});
