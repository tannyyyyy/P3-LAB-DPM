import React from 'react';
import { View, StyleSheet } from 'react-native';
import BeautyRoutineItem from './BeautyRoutineItem';

const routines = [
  { emoji: '🧴', label: 'Skincare' },
  { emoji: '💄', label: 'Makeup' },
  { emoji: '💅', label: 'Nail Care' },
  { emoji: '🛁', label: 'Spa Day' },
  { emoji: '👗', label: 'Fashion' },
];

const BeautyRoutineSelector = ({ onSelectRoutine }) => {
  return (
    <View style={styles.container}>
      {routines.map((routine) => (
        <BeautyRoutineItem key={routine.label} routine={routine} onPress={onSelectRoutine} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 20,
    },
  });

export default BeautyRoutineSelector;