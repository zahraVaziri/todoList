import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const TodoApp = () => {
  const [todos, setTodos] = useState([])

  const addInputValue = (input)=>{
    const newTodo = {
      id: Math.floor(Math.random()*1000),
      text:input,
      isComplated:false,
    }
    setTodos([...todos,newTodo])
  }
  return (
    <div className='container'>
      <TodoForm addInputValue={addInputValue}/>
      <TodoList todos={todos}/>
    </div>
  )
}

export default TodoApp
