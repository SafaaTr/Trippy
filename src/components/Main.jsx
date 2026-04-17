import React from 'react'
import PopularSection from './PopularSection'
import Trips from './Trips'

function Main() {

  return (
    <div className='md:mx-70 mx-20 my-30 md:my-64'>
      <PopularSection/>
      <Trips/>
    </div>
  )
}

export default Main