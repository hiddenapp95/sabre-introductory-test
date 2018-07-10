import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import AlertDialog from './alertDialog';
import Adapter from 'enzyme-adapter-react-16';
import strings from "../../localization/strings";
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

test('Execute callback when button is clicked', () => {
    const closeDialog = jest.fn();
    const wrapper = shallow(
        <AlertDialog handleClose={closeDialog} />
    );

    wrapper.find('.closeDialogButton').simulate('click');

    expect(closeDialog).toBeCalled();
});

test('Alert dialog description text when there is no error prop',()=>{
    const wrapper = shallow(
        <AlertDialog />
    );

    expect(wrapper.find('.alert-dialog-description').contains(strings.alertDialogMessageInit+" "+strings.alertDialogMessageEnd)).toBe(true);

});

test('Alert dialog description text when there is error prop',()=>{
    const message = "Dummy error";
    const wrapper = shallow(
        <AlertDialog error={{message: message}}/>
    );
    expect(wrapper.find('.alert-dialog-description').contains(strings.alertDialogMessageInit+" ["+message+"], "+strings.alertDialogMessageEnd)).toBe(true);
});