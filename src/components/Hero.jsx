import React from 'react'

function Hero() {
    const heroContent={
        title:"Your Journey Your Story ",
        textP:"Choose Your Favourite Destination.",
        textbut:"Travel Now"

    }
    
  return (
   
        <div className='flex flex-col justify-center gap-16 md:gap-26 items-center absolute top-173 md:top-1/2 left-1/2  transform -translate-x-1/2 '>
           
            <h1 className=' text-4xl md:text-5xl  font-bold text-white text-center'>{heroContent.title}</h1>
            <p className='text-2xl text-white text-center my-12'>{heroContent.textP}</p>
            <button className=' w-184 h-56 text-center text-[#222222] font-semibold rounded-lg bg-white mt-20'>{heroContent.textbut}</button>
        </div>
   
  )
}

export default Hero