import React from 'react'

const Button = ({svg,text}) => {
  return (
    <button class=" min-w-[230px]  my-2 mx-auto text-center flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-4 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none  focus:ring-offset-2 ">
    <div className='flex items-center'>
    <img className='h-8 w-8 inline-block' src={svg} alt="" />
    <span className='mx-4 text-[15px]'>
    {text}
    </span>
    </div>
    </button>
  )
}

export default Button
