import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Route from './src/App'
export default function App() {
  return (
    <View style={styles.bg}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.safearea}>
        <Route />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#ffe8cc'
  },
  safearea: {
    flex: 1,
    marginTop: 30
  }
});