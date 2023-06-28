import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Svgs/Logo.svg'
const Header = () => {

    const [toggle, setToggle] = useState(true)

    const togglemenu=()=>{
        setToggle(!toggle)
    }
    return (
        <div>

            <nav className='px-36 hidden  md:flex  justify-between items-center w-full py-2 bg-[#070A52] lg:flex gap-x-20 shadow-md'>
                <div>
                    <img className='h-14 w-14' src={Logo} alt="" />
                </div>
                <div className='flex justify-between items-center '>
                    <ul className='flex list-none justify-between gap-x-10'>
                        <Link to={'/'}>
                        <li className='hover:text-[#3fb5eb] font-semibold text-white cursor-pointer'>Home</li>
                        </Link>
                        <Link to={'/about'}>
                        <li className='hover:text-[#3fb5eb] font-semibold text-white cursor-pointer'>About</li>
                        </Link>
                    </ul>
                </div>
                <div></div>
            </nav>

            <nav className='lg:hidden md:hidden  bg-[#070A52] shadow-md flex items-center  justify-between py-2 px-4'>
                <div>
                    <img className='h-14 w-14' src={Logo}  alt="" />
                </div>

                <div>
                    {
                        toggle ?
                            <button onClick={togglemenu}>
                                <svg fill="#ffffff" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                            :
                            <button onClick={togglemenu}>
                                <svg  fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                    }
                </div>
            </nav>
            {
                !toggle?
                <div className=' bg-[#070A52] text-white shadow-md text-center lg:hidden md:hidden'>
                <ul className='py-2'>
                <Link to={'/'}>
                <li className='py-1 hover:text-[#3fb5eb] cursor-pointer font-semibold'>Home</li>
                </Link>
                <Link to={'/about'}>
                <li className='py-1 hover:text-[#3fb5eb] cursor-pointer font-semibold'>About</li>
                </Link>
                </ul> 
                </div>
                :<div></div>
            }

        </div>
    )
}

export default Header
