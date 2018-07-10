import React from 'react';
import Enzyme,{shallow,mount} from 'enzyme';
import Header from './header';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

test('Headers prop is passed to header row', () => {
    let dummyHeader = [{name:"messi"}];
    const wrapper = shallow(<Header headers={dummyHeader} />);

    expect(wrapper.find("#header-row").prop("headers")).toBe(dummyHeader);
});