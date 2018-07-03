import React from 'react';
import SelectFilter from "./selectFilter";
import InputFilter from "./inputFilter";
import {ExpansionPanel,ExpansionPanelSummary,Typography,ExpansionPanelDetails} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import strings from "../../../localization/strings";


const PlayerFilters = ({ filters, filterPlayersBy }) => {
    return(
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography >{strings.filtersTitle}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {filters.map( (filter,index) => filter.type === "input"?
                        <InputFilter key={index} filter={filter} filterPlayersBy={filterPlayersBy} />:
                        <SelectFilter key={index} filter={filter} filterPlayersBy={filterPlayersBy}/>)
                    }
                </ExpansionPanelDetails>
            </ExpansionPanel>
    )
};

export default PlayerFilters;