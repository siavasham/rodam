import React from 'react';
import { t } from 'locales';
import Home from 'icons/home.png';
import Explorer from 'icons/explorer.png';
import Bookmark from 'icons/bookmark.png';
import Convertion from 'icons/convertions.png';
import Profile from 'icons/profile.png';
import { StackActions } from '@react-navigation/native';
import * as RootNavigation from 'component/rootNavigation';

import ToolBar from './tabBar';

const items = [
  { icon: Home, name: "Home", label: t('home') },
  { icon: Explorer, name: "Explorer", label: t('explorer') },
  { icon: Bookmark, name: "Bookmark", label: t('bookmark') },
  { icon: Convertion, name: "Convertion", label: t('convertion') },
  { icon: Profile, name: "Profile", label: t('profile') },
]

export default function Toolbar() {
  const onChange = (route) => {
    // const pushAction = StackActions.pop();
    // const pushAction = StackActions.replace(route);
    // RootNavigation.dispatch(pushAction);
    RootNavigation.navigate(route);
  }
  return (
    <ToolBar items={items} onChange={onChange} />
  );
}