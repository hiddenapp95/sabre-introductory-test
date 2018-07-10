import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import PlayerRow from './playerRow';
import Adapter from 'enzyme-adapter-react-16';
import {DATE_OF_BIRTH_PROPERTY} from "../../../assignmentConstants";
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

test('Player row is empty if there is no player prop', () => {
    const wrapper = shallow(
        <PlayerRow />
    );

    expect(wrapper.find(".player-row-item")).toHaveLength(0);
});

test('Player row is empty if player prop is empty', () => {
    const wrapper = shallow(
        <PlayerRow player={{}}/>
    );

    expect(wrapper.find(".player-row-item")).toHaveLength(0);
});

test('Player row is not empty if player prop is not empty', () => {
    const wrapper = shallow(
        <PlayerRow player={{key:"value"}} />
    );

    expect(wrapper.find(".player-row-item")).toHaveLength(1);
});

test('Player row has 5 items if player prop has 5 keys', () => {
    const wrapper = shallow(
        <PlayerRow player={{key1:"value1",key2:"value2",key3:"value3",key4:"value4",[DATE_OF_BIRTH_PROPERTY]:"1995-05-05"}} />
    );

    expect(wrapper.find(".player-row-item")).toHaveLength(5);
});
