import React from 'react'

function Form({config , children ,title}) {
    const handleSubmit=(e)=>{
     
        e.preventDefualt()
    }
  return (
   <div className=''>
    <div className='md:w-806  m-auto md:my-80 my-40 w-[90%] shadow-2xl  rounded-2xl'>
        
        <h1 className=' text-center md:text-3xl  font-semibold py-50 '>{title}</h1>
        <form  onSubmit={()=>handleSubmit} className=' flex flex-col justify-center items-center w-full '>
           {
            config.map((item , index)=>{
                if (item.inputs) {
                    return item.inputs.map((input ,i)=>(
                        <input key={i} type={input.type}  placeholder={input.Placeholder} name={input.name} 
                        className='w-[60%] h-50 border rounded-sm outline-0 mb-20  p-10 placeholder:text-[#22222]'/>
                    ))
                }
                
                if (item.type ==="submit") {
                    return(
                        <div key={index} className='w-full  flex flex-col justify-center items-center mb-40  '>
                            <button type={item.type} name={item.name}  className="bg-[#eae8e8] mt-20 mb-30  rounded-lg cursor-pointer flex items-center justify-center  w-[60%] h-65 text-lg font-semibold text-[#222]  hover:bg-[#222]  hover:text-white ">{item.text}</button>
                            {children}
                        </div>
                    
                    )
                }
                
                return(
                    <textarea key={index} name={item.name} placeholder={item.Placeholder} className='w-[60%] h-150 p-10 border outline-0 rounded-sm placeholder:text-[#22222]'></textarea>
                )
            }) 
        
       }
         </form>
    </div>
    
   </div>
   
  )
}

export default Form