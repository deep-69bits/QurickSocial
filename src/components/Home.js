import React from 'react'
import Button from './atoms/Button'
import whatsapp from '../Svgs/whatsapp.svg'
import gmail from "../Svgs/gmail.svg"
import instagram from '../Svgs/instagram.svg'
import linkedin from '../Svgs/linkedin.svg'
import twitter from '../Svgs/twitter.svg'
import facebook from '../Svgs/facebook.svg'

const Home = () => {
  return (
    <div>
      <div className='py-6 items-center flex px-10 justify-center '>
        <textarea  
        placeholder='Write the things you want  '
        className='mx-auto shadow-lg  w-full lg:w-2/3 focus:shadow-2xl  outline-none py-2 px-3  inline-block' name="" id="" rows="4">
        </textarea>
      </div>

      <div className='grid grid-flow-row grid-cols-1 gap-y-10 gap-x-6  px-10 py-8 lg:grid-cols-3'>


        <div>

          <textarea 
          placeholder='Click on the button to see text here' 
          disabled  
          className='mx-auto cursor-text shadow-xl hover:shadow-2xl  rounded-md w-full  focus:shadow-[#3fb5eb]  outline-none py-2 px-3  inline-block' name="" id=""  rows="5">
          </textarea>

           <Button svg={whatsapp} text="Get it on Whatsapp"></Button>
        </div>

        <div>
        <textarea 
        placeholder='Click on the button to see text here' 
        disabled  
        className='mx-auto shadow-xl cursor-text hover:shadow-2xl w-full rounded-md  focus:shadow-[#3fb5eb]  outline-none py-2 px-3  inline-block' name="" id=""  rows="5">
        </textarea>
           <Button svg={facebook} text="Get it on Facebook"></Button>
        </div>


        <div>
        <textarea 
        placeholder='Click on the button to see text here' 
        disabled  
        className='mx-auto shadow-xl  cursor-text hover:shadow-2xl  w-full  rounded-md focus:shadow-[#3fb5eb]  outline-none py-2 px-3  inline-block' name="" id=""  rows="5">
        </textarea>
          <Button svg={twitter} text="Get it on Twitter"></Button>
        </div>


        <div>
        <textarea 
        placeholder='Click on the button to see text here' 
        disabled  
        className='mx-auto shadow-xl cursor-text hover:shadow-2xl w-full  rounded-md focus:shadow-[#3fb5eb]  outline-none py-2 px-3  inline-block' name="" id=""  rows="5">
        </textarea>
        <Button svg={linkedin} text="Get it on Linkedin"></Button>
        </div>


        <div>
        <textarea 
        placeholder='Click on the button to see text here' 
        disabled  
        className='mx-auto shadow-xl cursor-text hover:shadow-2xl  w-full rounded-md  focus:shadow-[#3fb5eb]  outline-none py-2 px-3  inline-block' name="" id=""  rows="5">
        </textarea>
        <Button svg={instagram} text="Get it on Instagram"></Button>
        </div>


        <div>
        <textarea 
        placeholder='Click on the button to see text here' 
        disabled  
        className='mx-auto shadow-xl  cursor-text hover:shadow-2xl  w-full rounded-md  focus:shadow-[#3fb5eb]  outline-none py-2 px-3  inline-block' name="" id=""  rows="5">
        </textarea>
        <Button svg={gmail} text="Get it on Gmail"></Button>
        </div>

      

      </div>


    </div>
  )
}

export default Home
