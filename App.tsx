import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import './index.css'
import { Provider } from 'react-redux';
import { store } from './src/store';
import { useState } from 'react';
// components
import AddToDo from './src/components/AddToDo';
import ToDoList from './src/components/ToDoList';

export default function App() {

  return (
    <Provider store={store}>
      <View className='bg-sky-500 w-screen flex flex-1 content-center items-center px-20 py-4'>
        <View>
          <Text className='text-white font-bold text-4xl md:text-5xl text-center'>To Do List</Text>
          <Text className='text-white font-bold text-xl md:text-3xl text-center'>Powered by</Text>
          <Text className='text-white font-bold text-2xl md:text-3xl text-center'>Marcelo Zuza</Text>

        </View>

        <View className='flex flex-1 bg-yellow-100 text-black px-8 py-4 rounded-lg mx-40 md:mx-20'>
          <AddToDo />
          <ToDoList />
        </View>

        <StatusBar style="auto" />
      </View>
      </Provider>

  );
}


