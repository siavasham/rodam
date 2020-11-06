import React, { useEffect, useState, useRef } from 'react';
import theme from 'theme/default';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { navigationRef } from 'component/rootNavigation';

import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';


import ToolBar from 'component/toolbar/';
// import Sign from 'route/sign/auth';
import Home from 'route/home/home';
import Explorer from 'route/explorer/explorer';
import Bookmark from 'route/bookmark/bookmark';
import Convertion from 'route/convertion/convertion';
import Profile from 'route/profile/profile';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
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
        ...TransitionPresets.ScaleFromCenterAndroid,
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
    'iran-sans-bold': require('fonts/IRAN-Sans-Bold.ttf'),
  });

  if (!fontsLoaded)
    return <AppLoading />
  // else
  //   return (< Sign />)
  return (
    <View style={styles.container}>
      <View style={styles.top} >
        <NavigationContainer ref={navigationRef} theme={MyTheme} >
          <MyStack />
        </NavigationContainer>
      </View>
      <View style={styles.bottom} >
        <ToolBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: theme.primaryBackground
  },
  top: {
    flex: 1,
  },
  bottom: {

  },
  screen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
