import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleSumbit = e => {
        e.preventDefault();

        editTodo(value, task.id)

        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSumbit}>
        <input type='text' className='todo-input' placeholder='Update Task' 
        value={value} onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>
             Update Task
        </button>
    </form>
  )
}
