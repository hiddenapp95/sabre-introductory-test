import React from 'react';
import Item from "./item";
import {TableRow} from "@material-ui/core";
import strings from "../../../localization/strings";

const HeaderRow = ({ headers }) => (
    <TableRow>
        {headers.map( (header,index)=>
            <Item key={index} data={strings[header]}/>)
        }
    </TableRow>
);

export default HeaderRow;