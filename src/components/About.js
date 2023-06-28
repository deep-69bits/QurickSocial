import React from 'react'

const About = () => {
  return (
    <div className='px-10'>
      <div className='w-full lg:w-2/3 m-auto shadow-xl hover:shadow-2xl py-10 px-10  min-h-[400px]'>
        <h1 className='text-3xl text-center'>About the application </h1>

        <div className='py-10 text-xl'>
          Design a web page that acts as a social media rewriter. The page should contain an EditText field, six buttons, and six Textfields associated with each button. The six buttons should have icons representing popular social media platforms such as WhatsApp, Email, LinkedIn, Twitter, Instagram, and Facebook. When a button is clicked, the text entered in the EditText field should be displayed in the associated Textfield.
        </div>
      </div>
    </div>
  )
}

export default About
