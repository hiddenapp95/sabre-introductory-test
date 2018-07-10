import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import App from './app';
import store from "../../store";
import Adapter from 'enzyme-adapter-react-16';
import {NAME} from "../../playerFinder";
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });


test('App renders players-app', () => {
    const wrapper = mount(
        <App store={store}/>
    );
    expect(wrapper.find('#players-app')).toHaveLength(1);
});

test('App renders loader when it is mounted starts fetchingPlayers', () => {
    const wrapper = mount(
        <App store={store} />
    );
    expect(wrapper.find('.tri-color-loader-page')).toHaveLength(1);
});

test('App renders at least a .filter-panel', () => {
    const wrapper = mount(
        <App store={store} />
    );

    expect(wrapper.find('.filter-panel').length>0).toBe(true);
});

test('App renders at least a #table-container', () => {
    const wrapper = mount(
        <App store={store} />
    );

    expect(wrapper.find('#table-container').length>0).toBe(true);
});

test('App renders at least a #table-container', () => {
    const wrapper = mount(
        <App store={store} />
    );

    expect(wrapper.find('#table-container').length>0).toBe(true);
});

test('dialogIsOpen state property is false when component is mounted', () => {
    const wrapper = shallow(
        <App store={store}/>
    ).dive();
    expect(wrapper.state().dialogIsOpen).toBe(false);
});

test('dialogIsOpen state property is true after executing handleOpenDialog',()=>{
    const wrapper = shallow(
            <App store={store}/>
    ).dive();
    wrapper.instance().handleOpenDialog({message:"error message"});
    expect(wrapper.state().dialogIsOpen).toBe(true);
});


test('dialogIsOpen state property is false when component is mounted', () => {
    const wrapper = shallow(
        <App store={store}/>
    ).dive();
    expect(wrapper.state().dialogIsOpen).toBe(false);
});

test('dialogIsOpen state property is false after executing handleCloseDialog',()=>{
    const wrapper = shallow(
        <App store={store}/>
    ).dive();
    wrapper.instance().handleOpenDialog({message:"error message"});
    wrapper.instance().handleCloseDialog();
    expect(wrapper.state().dialogIsOpen).toBe(false);
});

test('execute filterPlayersBy with ("age", 20) changes the filter prop in the store',()=>{
    const wrapper = shallow(
        <App store={store}/>
    ).dive();
    wrapper.find("#player-filters-container").props().filterPlayersBy("age",20);
    expect(store.getState()[NAME].filter["age"]).toBe(20);
});