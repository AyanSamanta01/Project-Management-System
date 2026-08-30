import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./authSlice"
import taskSlice from "./taskSlice"
import projectSlice from "./ProjectSlice"
const store=configureStore({
    reducer:{
        auth: authSlice,
        projectTodo: projectSlice,
        taskTodo: taskSlice
    }
})
export default authSlice