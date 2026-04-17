
import React from 'react'
import Hero from './Hero'

function Header() {
  return (
    <div className=" bg-[url('/images/header.jpg')] bg-cover bg-center h-screen w-full relative  ">
        <Hero/>
    </div>
  )
}

export default Header