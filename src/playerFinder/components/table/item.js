import React from 'react';
import {TableCell} from "@material-ui/core";

const defaultColor="black";

const Item = ({ data,color }) => <TableCell className={"table-cell"} style={{color:color?color:defaultColor}}>{data}</TableCell>;

export default Item;