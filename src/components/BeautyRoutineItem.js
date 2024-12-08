import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BeautyRoutineItem = ({ routine, onPress }) => (
  <TouchableOpacity onPress={() => onPress(routine)}>
    <View style={styles.routineItem}>
      <Text style={styles.emoji}>{routine.emoji}</Text>
      <Text style={styles.label}>{routine.label}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    routineItem: {
      alignItems: 'center',
      margin: 10,
    },
    emoji: {
      fontSize: 40,
    },
    label: {
      fontSize: 14,
      marginTop: 5,
      color: '#D8BFD8', 
    },
  });

export default BeautyRoutineItem;