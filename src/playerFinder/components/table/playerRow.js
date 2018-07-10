import React from 'react';
import Item from "./item";
import {TableRow} from "@material-ui/core";
import {DATE_OF_BIRTH_PROPERTY} from "../../../assignmentConstants";
import {getAgeFromDate} from "../../../utils/date";


const getOutputItemData = (player,property) => {
    switch(property){
        case DATE_OF_BIRTH_PROPERTY: return player[property] + " ("+getAgeFromDate(player[DATE_OF_BIRTH_PROPERTY])+")";
        default: return player[property];
    }
};

const PlayerRow = ({ player }) => (
     <TableRow className={"player-table-row"}>
        {player?
            Object.keys(player).map( (property,index) =>
                <Item className={"player-row-item"} key={index}
                      data={getOutputItemData(player,property)}/>
            )
            :null
        }
    </TableRow>
);

export default PlayerRow;