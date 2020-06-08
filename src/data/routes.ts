import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HelpIcon from '@material-ui/icons/Help';
import Profiles from '../cards/Profiles';
import { Route } from 'react-router-dom';
import { RouteDetail } from '../types/types';
import React from 'react';
import Questions from '../cards/Question/Questions';
import AnswerQuestions from '../cards/Question/AnswerQuestions';

export const routes: RouteDetail[] = [
  {
    path: '/profiles',
    name: 'Profiles',
    icon: AccountBoxIcon,
    component: Profiles,
    topnav: true,
  },
  {
    path: '/questions',
    name: 'Questions',
    icon: HelpIcon,
    component: Questions,
    topnav: true,
  },
  {
    path: '/answers',
    name: 'Answers',
    icon: HelpIcon,
    component: AnswerQuestions,
    topnav: true,
  },
  {
    path: '/',
    name: 'Home',
    icon: HomeIcon,
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
