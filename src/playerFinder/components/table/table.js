import React from 'react';
import {Table} from "@material-ui/core";
import Body from "./body";
import Header from "./header";
import {playerObjectProperties} from "../../../assignmentConstants";

const styles={
    tableContainer: {overflowX:"auto"}
};

const PlayersTable = ({players}) =>
    <div style={styles.tableContainer} id={"table-container"} >
        <Table>
            <Body players={players} id={"table-body"}/>
            <Header headers={playerObjectProperties}/>
        </Table>
    </div>;


export default PlayersTable;