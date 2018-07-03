import React from 'react';
import {Select,InputLabel,FormControl} from '@material-ui/core';
import strings from "../../../localization/strings";

const SelectFilter = ({ filter, filterPlayersBy }) =>
    <FormControl>
        <InputLabel htmlFor={filter.name}>{strings[filter.name]}</InputLabel>
        <Select
            native
            onChange={(event)=>filterPlayersBy(filter.name,event.target.value)}
            inputProps={{
                name: filter.name,
                id: filter.name,
            }}>
            <option value={""}/>
            {
                filter.options.map(option =>
                    <option key={option} value={option}>{option}</option>
                )
            }
        </Select>
    </FormControl> ;

export default SelectFilter;