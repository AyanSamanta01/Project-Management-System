import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./authSlice"
import taskSlice from "./taskSlice"
import projectSlice  from "./projectSlice"
export const store=configureStore({
    reducer:{
        auth: authSlice,
        projectTodo: projectSlice,
        taskTodo: taskSlice
    }
})
