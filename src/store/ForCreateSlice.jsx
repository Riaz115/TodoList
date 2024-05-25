import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myState: [],
};
const ForTodo = createSlice({
  name: "TodoList",
  initialState,
  reducers: {
    toGetValue: (state, action) => {
      state.myState.push(action.payload);
    },
    ForDelete: (state, action) => {
      state.myState = state.myState.filter(
        (State) => State.id !== action.payload
      );
    },
    ForDeleteAll: (state, action) => {
      state.myState = [];
    },
  },
});

export const { toGetValue, ForDelete, ForDeleteAll } = ForTodo.actions;
export default ForTodo.reducer;
