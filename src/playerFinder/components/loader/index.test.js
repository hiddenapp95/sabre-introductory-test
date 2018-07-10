import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import Loader from './index';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

test('A loader is rendered when imported from index', () => {
    const wrapper = shallow(
        <Loader />
    );

    expect(wrapper.find('.tri-color-loader-page')).toHaveLength(1);
});