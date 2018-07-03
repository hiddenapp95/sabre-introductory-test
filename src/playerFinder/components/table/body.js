import React from 'react';
import PlayerRow from './playerRow';
import {TableBody} from "@material-ui/core";

const Body = ({players}) =>
    <TableBody>
        {/* each player should have an id, using index this time */}
        {players.map((player,index) => <PlayerRow key={index} player={player}/>)}
    </TableBody>;

export default Body;