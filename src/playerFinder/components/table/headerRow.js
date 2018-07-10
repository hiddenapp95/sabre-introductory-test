import React from 'react';
import Item from "./item";
import {TableRow} from "@material-ui/core";
import strings from "../../../localization/strings";

const styles = {
    headerRowStyle: {backgroundColor:"black"},
    headerCellColor: "white"
};

const HeaderRow = ({ headers }) => (
    <TableRow style={styles.headerRowStyle}>
        {headers?
            headers.map( (header,index)=>
                <Item className={"header-cell"}
                      color={styles.headerCellColor}
                      key={index}
                      data={strings[header]}/>)
            :null}
    </TableRow>
);

export default HeaderRow;