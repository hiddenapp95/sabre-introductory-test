import React from 'react';
import {TextField,FormControl,Grid} from '@material-ui/core';
import strings from "../../../localization/strings";

const lettersRegExp = /^[a-zA-Z\s]*$/;

const valueMatchesConditions = (value) => lettersRegExp.test(value);

const TextFilter = ({ filter,value, filterPlayersBy }) =>
    filter?
        <Grid item xs={12} sm={4}>
            <FormControl>
                <TextField className={"input-filter"}
                           label={strings[filter.name]}
                           type={filter.inputType}
                           value={value}
                           onChange={(event)=> valueMatchesConditions(event.target.value)?filterPlayersBy(filter.name,event.target.value):null}/>
            </FormControl>
        </Grid>
        :null;

export default TextFilter;