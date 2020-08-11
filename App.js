import React from 'react';
import './src/theme/default';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import theme from 'theme/default';
import Route from './src/App';
export default function App() {
  return (
    <View style={styles.bg}>
      <StatusBar style='light' />
      <SafeAreaView style={styles.safearea}>
        <Route />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: theme.tabbarBackground
  },
  safearea: {
    flex: 1,
  }
});