import React, {useState} from 'react';
import './App.css';
import TodoInput from './components/Header/todoInput';
import TodoList from './components/Header/TodoList'

function App() {

  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      < TodoInput todos={todos} setTodos={setTodos} />
      < TodoList  todos={todos}/>
    </div>
  );
}

export default App;
