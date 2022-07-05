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
  const complateTodo = (id)=> {
    const index = todos.findIndex((item)=> item.id === id)
    const selectTodo = {...todos[index]}
    selectTodo.isComplated = !selectTodo.isComplated

    const updateTodo = [...todos]
    updateTodo[index]= selectTodo
    setTodos(updateTodo)

  }
  const deleteTodoHandler = (id)=>{
    const findTodo = todos.filter((t)=> t.id !== id)
    setTodos(findTodo)
  }
  const updateTodos=(id,newValue)=>{
    const index = todos.findIndex((item)=> item.id === id)
    const selectTodo = {...todos[index]}
    selectTodo.text = newValue

    const updateTodo = [...todos]
    updateTodo[index]= selectTodo
    setTodos(updateTodo)
  }
  return (
    <div className='container'>
      <TodoForm addInputValue={addInputValue}/>
      <TodoList todos={todos} onComplate={complateTodo} onDelete={deleteTodoHandler} onUpdateTodos={updateTodos}/>
    </div>
  )
}

export default TodoApp
