import React, { useState } from "react";
import { useTodo } from "../contexts";

const TodoForm = () => {
  const { addTodo } = useTodo();
  const [todo, setTodo] = useState("");
  const add = (e) => {
    e.preventDefault()
    if(!todo) return
    addTodo({ todo, complete: false });
    setTodo("");
  };
  return (
    <form onSubmit={add}
    className='flex gap-4 justify-center items-center'>
      <input
        className="w-fit px-3 m-2 text-2xl shadow-md"
        type="text"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        placeholder="add Todo"
      />
      <button className="px-2 bg-orange-200 rounded-xl py-1">
        ADD
      </button>
    </form>
  );
};

export default TodoForm;
