import React from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => {
  console.log("Tasks in ToDoList component:", tasks); // Debugging log

  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 18,
  },
});

export default ToDoList;
