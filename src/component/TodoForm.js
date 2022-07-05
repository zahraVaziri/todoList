 import React, { useState } from 'react'

const TodoForm = (props) => {
    const [input,setInput]= useState('')

    const changeHandler = (e)=>{
        console.log(e.target.value)
        setInput(e.target.value)
    }

    const submitHandler = (e)=>{
        e.preventDefault()

        if(!input){
          alert('add not enter');
          return;
        }
        props.addInputValue(input)
        setInput('')
    }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='text' value={input} onChange={changeHandler}/>
        <button type='submit'>add</button>
      </form>
    </div>
  )
}

export default TodoForm
