import React, { useState, useEffect } from 'react'
import { TodoForm } from './components'
import {TodoItem} from './components'
import { TodoProvider } from './contexts'

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
    // console.log(todo)
  }
  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }
  const toggleTodo=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,complete:!prevTodo.complete}:prevTodo)) 
  }
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo ))) 
  }

  return (
    <TodoProvider value={{todos, addTodo, deleteTodo, toggleTodo, updateTodo}}>
      <TodoForm/>
      <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
     
    </TodoProvider>
  )
}

export default App