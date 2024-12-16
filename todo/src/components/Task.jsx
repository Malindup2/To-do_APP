import React from 'react'

export const Task = ({TaskName,onDone,onDelete}) => {
  return (
    <div className='bg-white items-center flex justify-center m-10 rounded-2xl font-semibold shadow-xl gap-9 p-2 w-3/4 max-w-[600px] mx-auto'>
        <input type='checkbox' className='m-5 w-5 h-5 bg-blue-500' /><span>{TaskName}</span>
        <button onClick={onDone} className='bg-green-500 w-20 h-10 rounded-lg text-white hover:bg-green-600 hover:scale-105 mx-3'>
          Done</button>
        <button onClick={onDelete} className='bg-red-500 w-20 h-10 rounded-lg text-white hover:bg-red-600 hover:scale-105 mx-3'>
          Delete</button>
    </div>
  )
}
export default Task;