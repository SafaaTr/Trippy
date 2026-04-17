import React from 'react'
import { NavLink} from "react-router-dom";
// import { IoMdClose } from "react-icons/io";
// import { BsList } from "react-icons/bs";
import { BiSolidHomeHeart } from "react-icons/bi";
import { MdInfo } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";

function Links( {isSidebar = false ,closeMenu} ) {
    const links=[
        {
            to:"/",
            icon:<BiSolidHomeHeart size={25}/>,
            text:"Home"
        },
        {
            to:"/About",
            icon:<MdInfo size={25}/>,
            text:" About"
        },
        {
            to:"/Services",
            icon:<FaBriefcase size={25} className='mr-4'/>,
            text:"Services"
        },
        {
            to:"/Contact",
            icon:<FaAddressBook  size={25}/>,
            text:"Contact"
        },
       
    ]
    
    const buttonSign={
        to:"/Signup",
        // className:"button-signup",
        text:"Sign Up"
    }
        
  return (
   
       <ul className={` ${isSidebar?"flex flex-col":" hidden md:flex"}  items-center gap-20`}>
        {
            links.map((item ,index)=>(
                <li key={index} className='flex text-[#222] font-semibold  text-xl font-600  px-4 hover:bg-[#01959a] hover:rounded-lg hover:text-white transition-all duration-200 ease-in-out'>
                    <NavLink onClick={closeMenu} to={item.to} className="flex justify-center items-center gap-4 w-121 h-49 ">{item.icon} <span>{item.text}</span> </NavLink>
                </li>
            ))
        }
        <NavLink  onClick={closeMenu} to={buttonSign.to}  className="bg-[#eae8e8] rounded-lg cursor-pointer flex items-center justify-center  w-121 h-49 text-lg text-[#222] hover:bg-[#222]  hover:text-white ">{buttonSign.text}</NavLink>
        </ul>
   
  )
}

export default Links