import React from 'react'
import Card from './card'

function Trips() {
    const textSction={
        title:"Recent Trips",
        description:"You can discover unique destination using Google Maps."
    }

  return (
    <div>
           <div className='text-center md:mb-50 mb-20'>
            <h1 className='text-4xl font-bold mb-8 '>{textSction.title}</h1>
            <p>{textSction.description}</p>
        </div>
        <Card/>
    </div>
  )
}

export default Trips