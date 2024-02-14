import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState} from 'react'

import { useDispatch } from "react-redux"
import { addTodo } from '../slices/toDoSlice'

const AddToDo = () => {

    const [input, setInput] = useState<any>("")
    const dispatch = useDispatch()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if(input.trim() === "") return
        dispatch(addTodo(input))
        setInput("")
    }

    const handleInputChange = (text: string) => {
        setInput(text);
      };

  return (
    <View className='flex flex-1 px-10 py-4'>
      <Text className='text-white'></Text>
      <TextInput value={input} onChangeText={handleInputChange} className='bg-white text-xl px-2 py-1 rounded-lg' placeholder='Insert your task' />
      <Pressable onPress={handleSubmit} className='bg-sky-600 text-white py-2 px-2 my-2 w-14 rounded-lg'><Text className='text-white'>Send</Text></Pressable>
    </View>
  )
}

export default AddToDo