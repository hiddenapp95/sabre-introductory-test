import React from 'react';
import HeaderRow from './headerRow';
import {TableHead} from "@material-ui/core";

const Header = ({headers}) =>
        <TableHead>
            <HeaderRow id={"header-row"} headers={headers}/>
        </TableHead>;

export default Header;