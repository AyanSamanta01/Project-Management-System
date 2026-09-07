import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ProjectTodos: [],
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    createTodo: (state, action) => {
      state.ProjectTodos=action.payload
    },
    removeTodo: (state) => {
      state.ProjectTodos=""
    },
  },
});

export const { createTodo } = projectSlice.actions;

export default projectSlice.reducer;
