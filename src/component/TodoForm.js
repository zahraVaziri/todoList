 import React, { useEffect, useRef, useState } from 'react'

const TodoForm = (props) => {
    const [input,setInput]= useState(props.edit ? props.edit.text : '' )
    const inputRef= useRef(null)

    useEffect(()=>{
      inputRef.current.focus()
    },[])
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
        <div className='formcontrol'>
          <input type='text' value={input} onChange={changeHandler} placeholder={props.edit ? 'update todo ...' : 'add todo ...'} ref={inputRef}/>
          <button type='submit' className={`btn ${props.edit ? 'updateTodo' : 'addTodo'}`}>{props.edit ? 'Update' : 'App'}</button>
          
        </div>
      </form>
    </div>
  )
}

export default TodoForm
