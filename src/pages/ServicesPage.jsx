import React from 'react'
import Footer from '../components/Footer'
import Trips from '../components/Trips'

function ServicesPage() {
  return (
    <div>
      <div className="bg-[url('/images/ser.jpg')] h-457 w-full bg-center bg-cover flex justify-center items-center">
      <h1 className='text-white text-5xl font-bold'>Services</h1>
    </div>
    <div className='my-64'>
       <Trips/>
    </div>
   
      <Footer/>
    </div>
  )
}

export default ServicesPage