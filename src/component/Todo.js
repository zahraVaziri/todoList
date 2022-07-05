import React from 'react'

const Todo = ({todo,onComplate}) => {
  return (
    <div className='todo'>
        <div className={todo.isComplated ? 'complate' : ''}>{todo.text}</div>
        <div>
            <button>edit</button>
            <button onClick={onComplate}>complate</button>
        </div>
    </div>
  )
}

export default Todo
