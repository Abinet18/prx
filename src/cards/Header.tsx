import React from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';

import CardContainer from './CardContainer';
import { cardStyles } from '../styles/styles';
import GridItem from '../Views/GridItem';

import { getTopNavLinks } from '../data/routes';
import HeaderLink from './HeaderLink';
import GridContainer from '../Views/GridContainer';
import NavMenu from './NavMenu';

const Header = () => {
  const classes = cardStyles();

  return (
    <CardContainer
      xs={12}
      alignItems={'flex-start'}
      justify={'flex-start'}
      className={classes.pageheader}>
      <GridItem xs>Welcome</GridItem>
      <Box>
        <GridContainer xs>
          {getTopNavLinks.map((link) => (
            <HeaderLink link={link} />
          ))}
        </GridContainer>
      </Box>
      <Box>
        <GridContainer xs>
          <NavMenu />
        </GridContainer>
      </Box>
    </CardContainer>
  );
};

export default Header;
