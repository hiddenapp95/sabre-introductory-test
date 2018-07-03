import React from 'react';
import {TextField,FormControl} from '@material-ui/core';
import strings from "../../../localization/strings";

const InputFilter = ({ filter, filterPlayersBy }) =>
    <FormControl>
        <TextField label={strings[filter.name]} type={filter.inputType} defaultValue="" onChange={(event)=>filterPlayersBy(filter.name,event.target.value)}/>
    </FormControl>;

export default InputFilter;