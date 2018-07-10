import React from 'react';
import PlayerRow from './playerRow';
import {TableBody} from "@material-ui/core";

const Body = ({players}) =>
    <TableBody>
        {/* each player should have an id, using index this time */}
        {players ? players.map((player,index) => <PlayerRow className={"table-row"} key={index} player={player}/>):null}
    </TableBody>;

export default Body;