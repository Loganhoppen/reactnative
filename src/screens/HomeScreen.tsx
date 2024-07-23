import React from 'react';
import { Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

type RootStackParamList = {
  Home: undefined;
  About: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [tasks, setTasks] = React.useState<string[]>([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = (task: string) => {
    if (task.trim() !== '' && !tasks.includes(task)) {
      setTasks([...tasks, task]);
    }
  };

  return (
    <MainLayout>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
    </MainLayout>
  );
};

export default HomeScreen;
