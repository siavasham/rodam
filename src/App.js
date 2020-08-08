import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { navigationRef } from 'component/rootNavigation';

import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';


import ToolBar from 'component/toolbar/';
import Home from 'route/home/home';
import Explorer from 'route/explorer/explorer';
import Bookmark from 'route/bookmark/bookmark';
import Convertion from 'route/convertion/convertion';
import Profile from 'route/profile/profile';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'transparent'
  },
};
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarVisible: false,
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Explorer" component={Explorer} />
      <Stack.Screen name="Bookmark" component={Bookmark} />
      <Stack.Screen name="Convertion" component={Convertion} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    'iran-sans': require('fonts/IRAN-Sans-Regular.ttf'),
  });

  if (!fontsLoaded)
    return <AppLoading />
  else
    return (
      <View style={styles.container}>
        <View style={styles.top} >
          <NavigationContainer ref={navigationRef} theme={MyTheme} >
            <MyStack />
          </NavigationContainer>
        </View>
        <ToolBar />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
    overflow: 'hidden',
  },
  bottom: {
    height: 100
  },
  screen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});