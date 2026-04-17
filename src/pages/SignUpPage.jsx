import React from 'react'
import Footer from '../components/Footer'
// import { Form } from 'react-router-dom'
import { Link} from 'react-router-dom'
import Form from '../components/Form'

function SignUpPage() {
  const inputForm=[
    {
      inputs:[
        {
          type:"text",
          Placeholder:"Your Name",
          name:"name"
        },
        {
          type:"email",
          Placeholder:"your Email",
          name:"email"
        },
        {
          type:"password",
          Placeholder:"Password",
          name:"password"
        },
        {
          type:"password",
          Placeholder:"Repeat your password",
          name:"config"
        },
      ]
     
    },
    {
      type:"submit",
      text:"Send message",
      name:"submit"
    },
   ]
   const title="Create an account"
  return (
    <div>
      <div className="bg-[url('/images/contactt.jpg')] h-457 w-full bg-center bg-cover flex justify-center items-center">
        <h1 className='text-white text-5xl font-bold'>Sign Up</h1> </div>
        <Form  config={inputForm} title={title}>
        <p className='text-center px-30 md:px-0 text-lg'>Have already an account?<Link to="/login" className={`underline`} >Login here</Link></p>
        </Form>

        
       
      <Footer/>
    </div>
  )
}

export default SignUpPage