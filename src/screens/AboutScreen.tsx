import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen: React.FC = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <Text style={styles.text}>App Name: Incredible Todo List App</Text>
      <Text style={styles.text} onPress={() => alert('Easter Egg!')}>Logan Hoppen</Text>
      <Text style={styles.text}>Date: {currentDate}</Text>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default AboutScreen;
