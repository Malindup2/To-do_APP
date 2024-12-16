import React from 'react';

export const Searchbar = () => {
  return (
    <div className='flex justify-between items-center w-3/4 max-w-[600px] h-16 bg-white shadow-md rounded-lg my-5 mx-auto'>
      <input 
        type='text' 
        className='m-3 h-10 flex-grow border-gray-300 rounded-lg focus:outline-none px-3' 
        placeholder='Search Task...' 
      />
      <button className='bg-blue-500 w-20 h-10 rounded-lg text-white hover:bg-blue-600 hover:scale-105 mx-3'>
        Search
      </button>
    </div>
  );
}

export default Searchbar;
