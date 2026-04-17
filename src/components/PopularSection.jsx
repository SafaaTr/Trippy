import React from 'react'
import Destinations from './Destinations'

function PopularSection() {

    const textSction={
        title:"Popular Destinations",
        description:"Tours dive you the opportunity to see a lot, within a time frame."
    }

  return (
    <div className=' '>
        <div className=''>

        <div className='text-center md:mb-50 mb-20'>
            <h1 className='text-4xl font-bold mb-8 '>{textSction.title}</h1>
            <p>{textSction.description}</p>
        </div>
        <Destinations/>
        </div>
       
    </div>
  )
}

export default PopularSection