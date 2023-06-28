import React, { useState } from 'react'

const Header = () => {

    const [toggle, setToggle] = useState(true)

    const togglemenu=()=>{
        setToggle(!toggle)
    }
    return (
        <div>

            <nav className='px-36 hidden  md:flex  justify-between items-center w-full py-4 bg-white lg:flex gap-x-20 shadow-md'>
                <div>
                    <img className='h-14 w-14' src="https://www.freeiconspng.com/thumbs/gaming-logo/red-and-black-wings-with-x-gaming-logo-png-21.png" alt="" />
                </div>
                <div className='flex justify-between items-center '>
                    <ul className='flex list-none justify-between gap-x-10'>
                        <li className='hover:text-[#3fb5eb] cursor-pointer'>Home</li>
                        <li className='hover:text-[#3fb5eb] cursor-pointer'>About</li>
                    </ul>
                </div>
                <div></div>
            </nav>

            <nav className='lg:hidden md:hidden  bg-white shadow-md flex items-center  justify-between py-2 px-4'>
                <div>
                    <img className='h-14 w-14' src="https://www.freeiconspng.com/thumbs/gaming-logo/red-and-black-wings-with-x-gaming-logo-png-21.png" alt="" />
                </div>

                <div>
                    {
                        toggle ?
                            <button onClick={togglemenu}>
                                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                            :
                            <button onClick={togglemenu}>
                                <svg  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                    }
                </div>
            </nav>
            {
                !toggle?
                <div className=' bg-white shadow-md text-center lg:hidden md:hidden'>
                <ul className='py-2'>
                <li className='py-1 hover:text-[#3fb5eb] cursor-pointer'>Home</li>
                <li className='py-1 hover:text-[#3fb5eb] cursor-pointer'>About</li>
                </ul> 
                </div>
                :<div></div>
            }

        </div>
    )
}

export default Header
