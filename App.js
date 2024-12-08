import React from 'react';
import { StyleSheet, View } from 'react-native';
import BeautyTrackerScreen from './src/screens/BeautyTrackerScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <BeautyTrackerScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});