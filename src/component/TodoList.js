import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

const TodoList = ({todos,onComplate,onDelete,onUpdateTodos}) => {
  const [edit,setEdit] = useState({id:null,text:'',isComplated:false})
  const renderProduct= ()=>{
    if(todos.length === 0) return <p>add some todo</p>
    return todos.map((todo)=>{
      return <Todo key={todo.id} todo={todo} onEdit={()=>setEdit(todo)} onComplate={()=> onComplate(todo.id)} onDelete={()=> onDelete(todo.id)}/>
    })
  }
  const submitTodoHandler=(newValue)=>{
    onUpdateTodos(edit.id,newValue)
    setEdit({id:null,text:''})
  }

  return (
    <div>{edit.id ? <TodoForm addInputValue={submitTodoHandler} edit={edit}/> : renderProduct()}</div>
  )
}

export default TodoList
