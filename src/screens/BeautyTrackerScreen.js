import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import BeautyRoutineSelector from '../components/BeautyRoutineSelector';

const BeautyTrackerScreen = () => {
  const [routineHistory, setRoutineHistory] = useState([]);

  const handleRoutineSelect = (routine) => {
    const today = new Date().toLocaleDateString();
    if (routineHistory.some((entry) => entry.date === today)) {
      Alert.alert( 'Kamu sudah mengklik kecantikan hari ini.');
    } else {
      setRoutineHistory((prev) => [...prev, { ...routine, date: today }]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Daily Kecantikan </Text>
      <BeautyRoutineSelector onSelectRoutine={handleRoutineSelect} />
      <Text style={styles.historyTitle}>Kecantikan Hari Ini</Text>
      <FlatList
        data={routineHistory}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text style={styles.historyText}>
              {item.date}: {item.emoji} {item.label}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#6A5ACD', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E0E0FF', 
    textAlign: 'center',
  },
  historyTitle: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#F8F8FF', 
  },
  historyItem: {
    padding: 10,
    backgroundColor: '#836FFF', 
    borderRadius: 5,
    marginVertical: 5,
  },
  historyText: {
    fontSize: 16,
    color: '#F5F5F5', 
  },
});

export default BeautyTrackerScreen;