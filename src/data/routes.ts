import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HelpIcon from '@material-ui/icons/Help';
import Profiles from '../cards/Profiles';
import Posts from '../cards/Posts/Posts';

import { RouteDetail } from '../types/types';

import Questions from '../cards/Question/Questions';
import AnswerQuestions from '../cards/Question/AnswerQuestions';

export const routes: RouteDetail[] = [
  {
    path: '/profiles',
    name: 'Profiles',
    icon: AccountBoxIcon,
    component: Profiles,
    topnav: true,
    navOrder: 2,
  },
  {
    path: '/questions',
    name: 'Questions',
    icon: HelpIcon,
    component: Questions,
    topnav: true,
    navOrder: 3,
  },
  {
    path: '/answers',
    name: 'Answers',
    icon: HelpIcon,
    component: AnswerQuestions,
    topnav: true,
    navOrder: 4,
  },
  {
    path: '/posts',
    name: 'Posts',
    icon: HomeIcon,
    component: Posts,
    topnav: false,
  },
  {
    path: '/',
    name: 'Home',
    icon: HomeIcon,
    component: Posts,
    topnav: true,
    navOrder: 1,
  },
];

export const getTopNavLinks = routes
  .filter((route) => route.topnav)
  .sort((a, b) => (a.navOrder || 0) - (b.navOrder || 0))
  .map((route) => {
    return {
      path: route.path,
      icon: route.icon,
      name: route.name,
    };
  });
