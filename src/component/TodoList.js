import React from 'react'
import Todo from './Todo'

const TodoList = ({todos}) => {
  const renderProduct= ()=>{
    if(todos.length === 0) return <p>add some todo</p>
    return todos.map((todo)=>{
      return <Todo key={todo.id} todo={todo}/>
    })
  }
  return (
    <div>{renderProduct()}</div>
  )
}

export default TodoList
