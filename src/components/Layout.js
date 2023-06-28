import React from 'react'
import Header from './sections/Header'
const Layout = ({children}) => {
  return (
    <div className='max-w-[2200px] mx-auto '>
     <Header/>
      {children}
    
    </div>
  )
}

export default Layout
