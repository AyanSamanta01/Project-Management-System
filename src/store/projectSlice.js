import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    ProjectTodos: []
}

export const projectSlice=createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state,action)=>{
            const todo={
                id: nanoid(),
                text: action.payload,
                editStatus: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo: (state,action)=>{
            state.todos=state.todos.map((todo)=>todo.id===action.payload.id? {...todo,text: action.payload.text}:todo)
        },
        LocalStoreTodo: (state,action)=>{
            state.todos=action.payload
        }

    }
})

export const {addTodo,removeTodo,updateTodo,LocalStoreTodo}=projectSlice.actions

export default projectSlice.reducer