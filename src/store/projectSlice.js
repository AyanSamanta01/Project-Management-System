import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ProjectTodos: [],
};

export const projectSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state, action) => {
      state.ProjectTodos=action.payload
    },
    removeTodoTodo: (state) => {
      state.ProjectTodos=""
    },
  },
});

export const { createTodo } = projectSlice.actions;

export default projectSlice.reducer;
