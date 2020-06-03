import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Profiles from '../cards/Profiles';
import { Route } from 'react-router-dom';
import { RouteDetail } from '../types/types';
import React from 'react';

export const routes: RouteDetail[] = [
  {
    path: '/',
    name: 'Home',
    icon: HomeIcon,
    component: Profiles,
    topnav: true,
  },
  {
    path: '/profiles',
    name: 'Profiles',
    icon: AccountBoxIcon,
    component: Profiles,
    topnav: true,
  },
];

export const getTopNavLinks = routes
  .filter((route) => route.topnav)
  .map((route) => {
    return {
      path: route.path,
      icon: route.icon,
      name: route.name,
    };
  });
