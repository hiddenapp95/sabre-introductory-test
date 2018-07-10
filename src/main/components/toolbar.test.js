import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import Toolbar from './toolbar';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });


test('A toolbar is  beeing rendered', () => {
    const wrapper = shallow(
        <Toolbar/>
    );
    expect(wrapper.find('#appBar')).toHaveLength(1);
});


test('Execute callback on refresh button click', () => {
    const callback = jest.fn();
    const wrapper = shallow(
        <Toolbar handleButtonClick={callback}/>
    );
    wrapper.find('#refresh-button').simulate('click');
    expect(callback).toBeCalled();
});