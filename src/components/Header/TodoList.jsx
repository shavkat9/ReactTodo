import React from 'react';
import './Todo.css'

const TodoList = ({todos}) => {
    return (
        <ul>
            {
                todos.map((evt) => (
                    <li>
                        <p>{evt.id}</p>
                        <p>{evt.title}</p>
                        <button className='button'>Edit</button>
                        <button className='delete'>Delete</button>
                    </li>
                ))
            }
        </ul>
    )
}
export default TodoList;