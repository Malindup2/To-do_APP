import React from 'react'

export const Addbtn = () => {
  return (
    <div>
      <div className='items-center justify-center flex p-5'>
        <input type="text" className=' flex rounded-lg h-10 p-5 w-96' placeholder='add task...'></input>
      <button className='bg-amber-500 w-28 h-10 rounded-lg text-white hover:bg-blue-600 hover:scale-105 mx-3'>
        Add Task
      </button>
    </div>
    </div>
    
  )
}
export default Addbtn;
