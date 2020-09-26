import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { NavLink } from 'react-router-dom';

function handleClick(event: any) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const Header = () => {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <NavLink to='/table'>
                <Link color="inherit">Table </Link> 
            </NavLink>
            <NavLink to='/running-line'>
                <Link color="inherit">Running Line </Link> 
            </NavLink>
            {/* <Typography color="textPrimary">Breadcrumb</Typography> */}
        </Breadcrumbs>
    );
}

export default Header;