import React from 'react'
import Footer from '../components/Footer'
import { PiPlaceholder } from 'react-icons/pi'
import Form from '../components/Form'

function ContactPage() {
   const inputForm=[
    {
      inputs:[
        {
          type:"text",
          Placeholder:"Name",
          name:"name"
        },
        {
          type:"email",
          Placeholder:"Email",
          name:"email"
        },
        {
          type:"text",
          Placeholder:"Subjet",
          name:"subjet"
        },
        {
          type:"text",
          Placeholder:"Subjet",
          name:"subjet"
        },
      ]
     
    },
    {
      Placeholder:"Message",
      name:"message"
    },
    {
      type:"submit",
      text:"Send message",
      name:"submit"
    },
   ]
   const title="Send a message to us!"
  return (
    <div>
        <div className="bg-[url('/images/contactt.jpg')] h-457 w-full bg-center bg-cover flex justify-center items-center">
        <h1 className='text-white text-5xl font-bold'>Contact</h1></div>
        <Form config={inputForm} title={title}/>
      <Footer/>
    
    </div>
  )
}

export default ContactPage