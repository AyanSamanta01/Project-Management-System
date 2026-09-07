import { createSlice } from "@reduxjs/toolkit";

const initialState={
    tasks: []
}

export const taskSlice=createSlice({
    name: "task",
    initialState,
    reducers: {
        createTask: (state,action)=>{
            state.tasks=action.payload
        },
        removeTask: (state)=>{
            state.tasks=""
        },
        

    }
})

export const {createTask,removeTask}=taskSlice.actions

export default taskSlice.reducer