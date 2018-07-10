import React from 'react';
import Enzyme,{shallow,mount} from 'enzyme';
import PlayersTable from './table';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

test('Table\'s players prop is passed to body', () => {
    let dummyObject = {name:"messi"};
    const wrapper = shallow(<PlayersTable players={dummyObject} />);

    expect(wrapper.find("#table-body").prop("players")).toBe(dummyObject);
});

