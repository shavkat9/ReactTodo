import React, {useState} from 'react'
import { v4 } from 'uuid'


const TodoInput = ({todos, setTodos}) => {
  const HandleInput = (evt) => {
    if(evt.keyCode === 13) {
    
        const newTodo = {
            id:v4(),
            title: evt.target.value,
        }
        setTodos((item) => [newTodo, ...item] )
        console.log(newTodo)
        evt.target.value = null
    }

  }
  return (
    <div>
       <input type="text" onKeyUp={HandleInput} placeholder='Todo..' />
    </div>
  )
}

export default TodoInput;
