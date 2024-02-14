
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
    }
  },
});

export const { addTodo } = toDoSlice.actions;
export default toDoSlice.reducer;
