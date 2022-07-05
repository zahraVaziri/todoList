import React from 'react'

const Todo = ({todo}) => {
  return (
    <div key={todo.id}>
        <div>{todo.text}</div>
        <div>
            <button>edit</button>
            <button>complate</button>
        </div>
    </div>
  )
}

export default Todo
