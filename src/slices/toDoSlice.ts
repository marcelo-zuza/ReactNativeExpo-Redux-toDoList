
import { createSlice } from '@reduxjs/toolkit';

interface State {
  list: string[];
  filter: string;
}

const initialState: State = { list: [], filter: 'all' };

const toDoSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
    filter: "all",
  },
  reducers: {
    addTodo: (state: any, action: any) => {
      state.list.push({
        id: new Date().toISOString(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state: any, action: any) => {
      const toDo = state.list.find(
        (toDo: any) => toDo.id === action.payload
      )
      if (toDo) {
        toDo.completed = !toDo.completed;
      }
    },
    removeToDo: (state: any, action: any) => {
      state.list = state.list.filter(
        (toDo: any) => toDo.id !== action.payload
      );
    }
  },
});

export const { addTodo, toggleTodo, removeToDo } = toDoSlice.actions;
export default toDoSlice.reducer;
