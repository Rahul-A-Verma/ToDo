import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[{
        id:1,
        todo:"Todo Message",
        complete:false,
    }],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{},
    updateTodo:(id,todo)=>{}
})
export const TodoProvider = TodoContext.Provider

export const useTodo = ()=>{
    return useContext(TodoContext)
}