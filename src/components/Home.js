import React,{useState} from 'react'
import Button from './atoms/Button'
import whatsapp from '../Svgs/whatsapp.svg'
import gmail from "../Svgs/gmail.svg"
import instagram from '../Svgs/instagram.svg'
import linkedin from '../Svgs/linkedin.svg'
import twitter from '../Svgs/twitter.svg'
import facebook from '../Svgs/facebook.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

  const [data,setData]=useState("")
  const [whatsappdata,setWhatsAppData]=useState(null)
  const [facebookData,setFaceBookData]=useState(null);
  const [LinkedinData,setLinkedinData]=useState(null)
  const [instagramData,setInstagramData]=useState(null)
  const [gmailData,setGmailData]=useState(null)
  const [twitterData,settwitterData]=useState(null)

  const changedata=(e)=>{setData(e.target.value)}

  const changeWhatsAppData=(e)=>{
    if(data.replace(/\s/g, '').length==0 || data==null || data===""){toast("Data is empty");setWhatsAppData("")}
    else{setWhatsAppData(data)}
  }
  const changeInstaData=(e)=>{
    if(data.replace(/\s/g, '').length==0 || data==null || data===""){toast("Data is empty");setInstagramData("")}
    else{setInstagramData(data)}
  }

  const changeFaceBookData=(e)=>{
    if(data.replace(/\s/g, '').length==0 || data==null || data===""){toast("Data is empty");setFaceBookData("")}
    else{setFaceBookData(data)}
  }

  const changeLinkedinData=(e)=>{
    if(data.replace(/\s/g, '').length==0 || data==null || data===""){toast("Data is empty");setLinkedinData("")}
    else{setLinkedinData(data)}
  }

  const changeGmailData=(e)=>{
    if(data.replace(/\s/g, '').length==0 || data==null || data===""){toast("Data is empty");setGmailData("")}
    else{setGmailData(data)}
  }

  const changeTwitterData=(e)=>{
    if(data.replace(/\s/g, '').length==0 || data==null || data===""){toast("Data is empty");settwitterData("")}
    else{settwitterData(data)}
  }

  return (
    <div>
    <ToastContainer />
      <div className='py-6 items-center flex px-10 justify-center '>
        <textarea  
        value={data}
        onChange={changedata}
        placeholder='Write the things you want  '
        className='mx-auto shadow-lg  w-full lg:w-2/3 focus:shadow-2xl  outline-none py-2 px-3  inline-block' name="" id="" rows="4">
        </textarea>
      </div>

      <div className='grid grid-flow-row grid-cols-1 gap-y-10 gap-x-6  px-10 py-8 lg:grid-cols-3'>


        <div>
          <textarea 
          readOnly
          defaultValue={whatsappdata}
          className='mx-auto cursor-text shadow-xl hover:shadow-2xl  rounded-md w-full  focus:shadow-[#3fb5eb]  outline-none py-2 px-3  inline-block' name="" id=""  rows="5">
          </textarea>
           
          <div onClick={changeWhatsAppData}>
          <Button  svg={whatsapp} text="Get it on Whatsapp"></Button>
          </div>
        </div>


        <div>
        <textarea 
        defaultValue={facebookData}
        readOnly
        className='mx-auto shadow-xl cursor-text hover:shadow-2xl w-full rounded-md  focus:shadow-[#3fb5eb]  outline-none py-2 px-3  inline-block' name="" id=""  rows="5">
        </textarea>
          <div  onClick={changeFaceBookData}>
          <Button svg={facebook} text="Get it on Facebook"></Button>
          </div>
        </div>


        <div>
        <textarea 
        defaultValue={twitterData}
        readOnly 
        className='mx-auto shadow-xl  cursor-text hover:shadow-2xl  w-full  rounded-md focus:shadow-[#3fb5eb]  outline-none py-2 px-3  inline-block' name="" id=""  rows="5">
        </textarea>
          <div onClick={changeTwitterData}>
          <Button svg={twitter} text="Get it on Twitter"></Button>
          </div>
        </div>


        <div>
        <textarea 
        defaultValue={LinkedinData}
        readOnly  
        className='mx-auto shadow-xl cursor-text hover:shadow-2xl w-full  rounded-md focus:shadow-[#3fb5eb]  outline-none py-2 px-3  inline-block' name="" id=""  rows="5">
        </textarea>
        <div onClick={changeLinkedinData}>
        <Button svg={linkedin} text="Get it on Linkedin"></Button>
        </div>
        </div>


        <div>
        <textarea 
        defaultValue={instagramData}
        readOnly 
        className='mx-auto shadow-xl cursor-text hover:shadow-2xl  w-full rounded-md  focus:shadow-[#3fb5eb]  outline-none py-2 px-3  inline-block' name="" id=""  rows="5">
        </textarea>
        <div onClick={changeInstaData}>
        <Button svg={instagram} text="Get it on Instagram"></Button>
        </div>
        </div>


        <div>
        <textarea 
        defaultValue={gmailData}
        readOnly 
        className='mx-auto shadow-xl  cursor-text hover:shadow-2xl  w-full rounded-md  focus:shadow-[#3fb5eb]  outline-none py-2 px-3  inline-block' name="" id=""  rows="5">
        </textarea>
        <div onClick={changeGmailData}>
        <Button svg={gmail} text="Get it on Gmail"></Button>
        </div>
        </div>

      

      </div>


    </div>
  )
}

export default Home
