import React from 'react'

const Todo = ({todo,onComplate,onDelete,onEdit}) => {
  return (
    <div  className='todo'>
        <div onClick={onComplate} className={todo.isComplated ? 'complate' : ''}>{todo.text}</div>
        <div>
            <button onClick={onEdit} className='btn' >edit</button>
            <button onClick={onDelete} className="btn remove">delete</button>
        </div>
    </div>
  )
}

export default Todo
