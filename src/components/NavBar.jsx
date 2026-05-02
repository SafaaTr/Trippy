import React from 'react'
// import { Link,} from "react-router-dom";
// import { IoMdClose } from "react-icons/io";
// import { BsList } from "react-icons/bs";
// import { BiSolidHomeHeart } from "react-icons/bi";
// import { MdInfo } from "react-icons/md";
// import { FaBriefcase } from "react-icons/fa";
// import { FaAddressBook } from "react-icons/fa";

import MenuNav from './MenuNav';
import Links from './Links';



const NavBar = () => {
    const title="Trippy"
    
    

  return (

   <nav className=' z-10 flex justify-between items-center bg-white shadow-2xl fixed rounded-2xl w-[95%] h-80 top-28 left-1/2 transform -translate-x-1/2 px-30   '>
    <h1 className='font-semibold text-3xl md:text-4xl '>{title}</h1>
    <Links/>
  
    <div className='md:hidden  '>
        <MenuNav title={title}/>
    </div>
   </nav>
  )
}

export default NavBar
