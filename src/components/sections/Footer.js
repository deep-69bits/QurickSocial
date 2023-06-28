import React from 'react'
import heart from '../../Svgs/heart.svg'
const Footer = () => {
  return (
    <div className='sticky bottom-0 mt-10 bg-[#070A52] text-white shadow-[#3fb5eb] shadow-2xl text-center py-3 w-full flex items-center justify-center'>
     <img className='h-6 w-6 mx-2' src={heart} alt="" />
     <span className='font-semibold'>
     Made by deep  
     </span>
     <img className='h-6 w-6 mx-2' src={heart} alt="" />

    </div>
  )
}

export default Footer
