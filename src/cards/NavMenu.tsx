import React from 'react';

import { cardStyles } from '../styles/styles';

import { getTopNavLinks } from '../data/routes';

import { Menu, MenuItem } from '@material-ui/core';
import HeaderNavLink from './HeaderNavLink';
import MenuIconButton from '../IconButtons/MenuIconButton';

const NavMenu = () => {
  const classes = cardStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MenuIconButton fontSize={'large'} onClick={handleClick} />
      <Menu
        id='long-menu'
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}>
        {getTopNavLinks.map((link) => (
          <MenuItem key={link.name} onClick={handleClose}>
            <HeaderNavLink link={link} />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default NavMenu;
