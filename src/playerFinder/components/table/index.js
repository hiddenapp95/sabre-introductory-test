import React from 'react';
import {Table} from "@material-ui/core";
import Body from "./body";
import Header from "./header";
import {playerObjectProperties} from "../../../assignmentConstants";

const PlayersTable = ({players}) =>
    <Table>
        <Body players={players}/>
        <Header headers={playerObjectProperties}/>
    </Table>;

export default PlayersTable;