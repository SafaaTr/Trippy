import React from 'react'
import Form from '../components/Form'
import Footer from '../components/Footer'

function Login() {
    const inputForm=[
        {
          inputs:[
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
       const title="Log in my account"
  return (
    <div>
        <div className="bg-[url('/images/login.jpg')] h-457 w-full bg-center bg-cover flex justify-center items-center">
        <h1 className='text-white text-5xl font-bold'>Log In</h1> </div>
        <Form  config={inputForm} title={title}/>
        <Footer/>
    </div>
  )
}

export default Login