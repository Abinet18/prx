import React from 'react';
import { NavLink } from 'react-router-dom';

import CardContainer from './CardContainer';
import { cardStyles } from '../styles/styles';
import GridItem from '../Views/GridItem';

import { getTopNavLinks } from '../data/routes';
import HeaderLink from './HeaderLink';
import GridContainer from '../Views/GridContainer';

const Header = () => {
  const classes = cardStyles();

  return (
    <CardContainer
      xs={12}
      alignItems={'flex-start'}
      justify={'flex-start'}
      className={classes.pageheader}>
      <GridItem xs>Welcome</GridItem>
      <GridContainer xs>
        {getTopNavLinks.map((link) => (
          <HeaderLink link={link} />
        ))}
      </GridContainer>
    </CardContainer>
  );
};

export default Header;
