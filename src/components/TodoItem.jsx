import React, { useState } from 'react'
import { useTodo } from '../contexts'
const TodoItem = ({todo}) => {
    const {deleteTodo, toggleTodo, updateTodo} = useTodo()
    const [edit, setEdit] = useState(false)
    const [ todoMsg, setTodoMsg]=useState(todo.todo)
    // console.log(todo)

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setEdit(false)
      }
  return (
    <div className='flex gap-4 justify-center items-center'>
        <input type="checkbox" 
        onChange={()=>toggleTodo(todo.id)}/>

        <input type="text" value={todoMsg}
        className={`${todo.complete ? "line-through" : ""}`} 
        readOnly={!edit}
        onChange={(e)=>setTodoMsg(e.target.value)}/>

         <button
              onClick={() => {
                  if (todo.completed) return;

                  if (edit) {
                      editTodo();
                  } else setEdit((prev) => !prev);
              }}
          >
              {edit ? "SAVE" : "EDIT"}
          </button>
        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
    </div>
  )
}

export default TodoItem