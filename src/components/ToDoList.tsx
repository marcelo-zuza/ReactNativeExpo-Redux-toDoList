import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native'
import React from 'react'
import {  useDispatch, useSelector } from "react-redux"
import { toggleTodo } from '../slices/toDoSlice'


const ToDoList = () => {

    const { list, filter } = useSelector((state: any) => state.toDo)
    const dispatch = useDispatch()


  return (
    <View>
      <View className="flex flex-row gap-2 items-center">
        <Pressable className="bg-sky-500 px-2 py-2 rounded-lg hover:bg-white hover:text-sky-500 duration-500 hover:border-sky-500"><Text className="text-white">All</Text></Pressable>
        <Pressable className="bg-sky-500 px-2 py-2 rounded-lg hover:bg-white hover:text-sky-500 duration-500 hover:border-sky-500"><Text className="text-white">Complete</Text></Pressable>
        <Pressable className="bg-sky-500 px-2 py-2 rounded-lg hover:bg-white hover:text-sky-500 duration-500 hover:border-sky-500"><Text className="text-white">Incomplete</Text></Pressable>
      </View>
    <View>
        <FlatList data={list} keyExtractor={(toDo) => toDo.id} renderItem={({item}) => 
            <View className='px-1 py-2 my-1 bg-sky-500 flex flex-row rounded-xl'>
                <Text onPress={() => dispatch(toggleTodo(item.id))} className='text-white text-xl'>{item.text}</Text>
                <Pressable className='bg-red-500 px-2 py-2 rounded-lg justify-end'><Text className='text-white'>Delete</Text></Pressable>
            </View>
    
    } />
    </View>

    </View>
  )
}

const toDoDiv = () => {
    return (
        <View>
            <Text>hello</Text>
        </View>
    )
}

export default ToDoList

