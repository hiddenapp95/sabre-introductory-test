import React from 'react';
import {Select,InputLabel,FormControl,Grid} from '@material-ui/core';
import strings from "../../../localization/strings";

const SelectFilter = ({ filter, value, filterPlayersBy }) =>
    filter?
        <Grid item xs={12} sm={4}>
            <FormControl>
                <InputLabel htmlFor={filter.name}>{strings[filter.name]}</InputLabel>
                <Select
                    className={"select-filter"}
                    native
                    value={value}
                    onChange={(event)=>filterPlayersBy(filter.name,event.target.value)}
                    inputProps={{
                        name: filter.name,
                        id: filter.name,
                    }}>
                    <option value={""}/>
                    {
                        filter.options?
                            filter.options.map(option =>
                                <option key={option} value={option}>{option}</option>)
                            :null

                    }
                </Select>
            </FormControl>
        </Grid>
        :null;

export default SelectFilter;