import React from 'react';
import SelectFilter from "./selectFilter";
import TextFilter from "./textFilter";
import NumberFilter from "./numberFilter";
import {ExpansionPanel,ExpansionPanelSummary,Typography,ExpansionPanelDetails} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import strings from "../../../localization/strings";
import Grid from "@material-ui/core/Grid";

const getFilter = (filterOptions, index, filterChangeHandler, value) => {
    switch(filterOptions.inputType){
        case "text": return <TextFilter className={"input-filter"} value={value} key={index} filter={filterOptions} filterPlayersBy={filterChangeHandler} />;
        case "select": return <SelectFilter className={"select-filter"} value={value} key={index} filter={filterOptions} filterPlayersBy={filterChangeHandler}/>;
        case "number": return <NumberFilter className={"number-filter"} value={value} key={index} filter={filterOptions} filterPlayersBy={filterChangeHandler} />;
        default: return <TextFilter className={"input-filter"} value={value} key={index} filter={filterOptions} filterPlayersBy={filterChangeHandler} />;
    }
};

const PlayerFilters = ({ filtersInfo, filterPlayersBy, filters }) =>
    filtersInfo?
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography >{strings.filtersTitle}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Grid container spacing={24} className={"filter-panel"}>
                        {filtersInfo.map( (filter,index) =>
                            getFilter(filter,index,filterPlayersBy,filters[filter.name])
                        )}
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        :null;

export default PlayerFilters;