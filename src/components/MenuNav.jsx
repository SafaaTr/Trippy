import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { BsList } from "react-icons/bs";
import Links from './Links';
function MenuNav({title}) {
    const [showList , setShowList]=useState(false)
  return (
    
    <>
    <button onClick={()=>setShowList(true)}>
       <BsList size={30}/>
      </button>
     
      {showList && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setShowList(false)}
        ></div>
      )
      }
      <div className={`fixed -top-1 -right-10 h-screen  z-50 bg-white w-full rounded-2xl transform transition-transform duration-300  ${showList? "translate-x-0":"translate-x-full"}`}  >
        <div className='flex flex-col h-full'>
          <div className='flex justify-between items-center p-4 my-10'>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <button onClick={()=>setShowList(false)}>
                <IoMdClose size={30}/> 
            </button> 
          </div>

         <div className='p-4 bg-white mt-20  '>
            <Links isSidebar={true} closeMenu={()=>setShowList(false)}/>
          </div>

        </div>
        
      </div>

       
      
   
    </>
  )
}

export default MenuNav