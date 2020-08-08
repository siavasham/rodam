import React from 'react';
import Home from 'icons/home.png';
import Explorer from 'icons/explorer.png';
import Bookmark from 'icons/bookmark.png';
import Convertion from 'icons/convertions.png';
import Profile from 'icons/profile.png';
import { StackActions } from '@react-navigation/native';
import * as RootNavigation from 'component/rootNavigation';

import ToolBar from './tabBar';

const items = [
  { icon: Home, name: "Home", label: 'home' },
  { icon: Explorer, name: "Explorer", label: 'explorer' },
  { icon: Bookmark, name: "Bookmark", label: 'bookmark' },
  { icon: Convertion, name: "Convertion", label: 'convertion' },
  { icon: Profile, name: "Profile", label: 'profile' },
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