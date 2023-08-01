import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

const HomeScreen: React.FC = () => {
  const handleButtonPress = () => {
    // Handle the button press event
    console.log('Button Pressed!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to the Home Screen</Text>
      <Button title="Press Me" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default HomeScreen;
