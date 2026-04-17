import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
    const icon=[
       { icon:<FaFacebookSquare size={30} color='white'/>, link:"https://www.facebook.com/"},
       {icon: <FaSquareInstagram size={30} color='white' /> ,link:"https://www.instagram.com/safaa_altarshan?igsh=aG82aTk3NWgwcXlw"},
       {icon: <FaBehanceSquare size={30} color='white' /> ,link:"https://github.com/SafaaTr"},
       {icon: <FaTwitterSquare size={30} color='white'/>, link:"https://www.linkedin.com/in/safaa-altarshan-6860b62a7?utm_source=share_via&utm_content=profile&utm_medium=member_android"},
    ]
    const footerLink=[
        {
            title:"Project",
            links:[
                {name:"Changelog" ,link:"https://github.com/SafaaTr"},
                {name:"Status" ,link:"https://github.com/SafaaTr"},
                {name:"License" ,link:"https://github.com/SafaaTr"},
                {name:"All Versions" ,link:"https://github.com/SafaaTr"},
        ]
        },
        {
            title:"Community",
            links:[
                {name:"GitHub" ,link:"https://github.com/SafaaTr"},
                {name:"Issues" ,link:"https://github.com/SafaaTr"},
                {name:"Project" ,link:"https://github.com/SafaaTr"},
                {name:"Twitter" ,link:"https://github.com/SafaaTr"},
        ]
        },
        {
            title:"Help",
            links:[
                {name:"Support" ,link:"https://github.com/SafaaTr"},
                {name:"Troubleshooting" ,link:"https://github.com/SafaaTr"},
                {name:"Contact us" ,link:"https://github.com/SafaaTr"},
                
        ]
        },
        {
            title:"Others",
            links:[
                {name:"Terms of Service" ,link:"https://github.com/SafaaTr"},
                {name:"Privacy Policy " ,link:"https://github.com/SafaaTr"},
                {name:"License" ,link:"https://github.com/SafaaTr"},
               
        ]
        },
    ]
  return (
    <footer className='bg-[#222222]  px-20 md:px-96  py-64'>
        <div className='flex flex-wrap justify-between items-center'>
            <div>
            <h1 className='font-semibold text-2xl md:text-3xl text-white '>Trippy</h1>
            <p className='text-xl text-white my-8'>Choose Your Favourite Destination</p>
            </div>
            <div className='flex items-center gap-10'>
                {
                    icon.map((item ,index)=>(
                        <Link key={index} to={item.link}>{item.icon}</Link>
                    ))
                }
            </div>
        </div>
        <div className='flex flex-wrap justify-between items-center pt-32'>
               {
                footerLink.map((item ,i)=>(
                    <div key={i} className=''>
                        <h2 className='flex items-center text-white font-semibold text-2xl py-16'>{item.title}</h2>
                        <div className=''>
                        { 
                            item.links.map((to,index)=>(
                                <Link key={index} to={to.link}className='text-white block pb-6'>{to.name}</Link>
                            ))
                        }
                        </div>
                    </div>
                   
                )  
                )
               }
        </div>
       
    </footer>

    
  )
}

export default Footer