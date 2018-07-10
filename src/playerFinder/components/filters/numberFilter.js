import React from 'react';
import {TextField,FormControl,Grid,InputAdornment,IconButton} from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete";

import strings from "../../../localization/strings";

const valueMatchesConditions = (value,min,max) => value>=min && value<=max;

const NumberFilter = ({ filter,value, filterPlayersBy }) =>
    filter?
        <Grid item xs={12} sm={4}>
            <FormControl>
                <TextField className={"input-filter"}
                           value={value}
                           label={strings[filter.name]}
                           type={filter.inputType}
                           onChange={(event)=>
                               valueMatchesConditions(event.target.value,filter.min,filter.max)?
                                   filterPlayersBy(filter.name,event.target.value):filterPlayersBy(filter.name,filter.min)}
                           InputProps={{
                               endAdornment: <InputAdornment position="end"
                               >
                                   <IconButton
                                       className={"clear-filter-icon"}
                                       onClick={()=>filterPlayersBy(filter.name,"")}
                                       aria-label="Toggle password visibility"
                                   >
                                       <DeleteIcon />
                                   </IconButton>
                               </InputAdornment>
                           }}
                           />
            </FormControl>
        </Grid>
        :null;


export default NumberFilter;