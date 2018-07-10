import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import PlayerFilters from './playerFilters';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });


test('Filter panel is not beeing rendered if no filterInfo prop is passed', () => {
    const wrapper = shallow(
        <PlayerFilters />
    );
    expect(wrapper.find('.filter-panel')).toHaveLength(0);
});

test('Filter panel is beeing rendered if filterInfo prop is passed', () => {
    const wrapper = shallow(
        <PlayerFilters filtersInfo={[]} filter={{name:"a name"}}/>
    );
    expect(wrapper.find('.filter-panel')).toHaveLength(1);
});

test('Filter panel has a select child if it is passed in the filterInfo prop', () => {
    const wrapper = shallow(
        <PlayerFilters filtersInfo={[{inputType:"select"}]} filters={{name:"a name"}}/>
    );
    expect(wrapper.find('.select-filter')).toHaveLength(1);
});

test('Filter panel has an input child if it is passed in the filterInfo prop', () => {
    const wrapper = shallow(
        <PlayerFilters filtersInfo={[{inputType:"text"}]} filters={{name:"a name"}}/>
    );
    expect(wrapper.find('.input-filter')).toHaveLength(1);
});


test('Filter panel has a select and and input if they are passed in the filterInfo prop', () => {
    const wrapper = shallow(
        <PlayerFilters filtersInfo={[{inputType:"select"},{inputType:"text"}]} filters={{name:"a name"}}/>
    );
    expect(wrapper.find('.select-filter')).toHaveLength(1);
    expect(wrapper.find('.input-filter')).toHaveLength(1);
});

test('Filter panel has an input if the input type is default', () => {
    const wrapper = shallow(
        <PlayerFilters filtersInfo={[{inputType:"default"}]} filters={{name:"a name"}}/>
    );
    expect(wrapper.find('.input-filter')).toHaveLength(1);
});
