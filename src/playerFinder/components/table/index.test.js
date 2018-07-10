import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import PlayersTable from './index';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

test('A players table is rendered when imported from index', () => {
    const wrapper = shallow(
        <PlayersTable />
    );

    expect(wrapper.find('#table-container')).toHaveLength(1);
});