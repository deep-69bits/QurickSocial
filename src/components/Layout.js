import React from 'react'
import Header from './sections/Header'
import Footer from './sections/Footer'
const Layout = ({children}) => {
  return (
    <div className='max-w-[1800px] min-h-screen flex flex-col justify-between  mx-auto '>
     <Header/>
      {children}
     <Footer/>
    </div>
  )
}

export default Layout
