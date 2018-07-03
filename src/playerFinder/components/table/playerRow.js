import React from 'react';
import Item from "./item";
import {TableRow} from "@material-ui/core";
import {getPlayerAge} from "../../model";

const PlayerRow = ({ player }) => (
    <TableRow>
        {Object.keys(player).map( (property,index) =>
            <Item key={index} data={player[property] + (property==="dateOfBirth"? " ("+getPlayerAge(player)+")":"")}/>)}
    </TableRow>
);

export default PlayerRow;