import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native'
import React from 'react'
import {  useDispatch, useSelector } from "react-redux"
import { toggleTodo, removeToDo } from '../slices/toDoSlice'
import { useState } from 'react'
import { styled } from 'nativewind'


const ToDoList = () => {

    const { list, filter } = useSelector((state: any) => state.toDo)
    const dispatch = useDispatch()

    const [line, setLine] = useState<string>("")
    const [lineOn, setLineOn] = useState<boolean>(false)

    const handleLineOn = () => {
      lineOn ? (setLineOn(false), setLine("")) : (setLineOn(true), setLine("line-through"))
    }


  return (
    <View>

    <View>
        <FlatList data={list} keyExtractor={(toDo) => toDo.id} renderItem={({item}) => 
            <View className='px-3 py-1 my-2 bg-sky-500 flex flex-row rounded-xl'>
                <Text onPress={() => {dispatch(toggleTodo(item.id)), handleLineOn()}} className='text-white text-xl'>{item.text}</Text>
                <View className='flex flex-1 content-end justify-end items-end'>
                  <Pressable onPress={() => dispatch(removeToDo(item.id))} className='bg-red-500 px-2 py-2 rounded-lg'><Text className='text-white'>Delete</Text></Pressable>
                </View>

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

