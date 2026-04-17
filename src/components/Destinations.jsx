import React from 'react'
import img1 from '/images/D1.jpg'
import img2 from '/images/d2.jpg'
import img3 from '/images/d3.jpg'
import img4 from '/images/d4.jpg'

function Destinations() {
    const destinations=[
        {
            title:"Mt. Daguldul, Batangas",
            paragraph:"One of the most iconic views in luzon, Mt. Taal boosts a Volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!",
            img1:img1,
            img2:img2
        },
        {
            title:"Taal Volcano, Batangas",
            paragraph:"A nice trek in southern Batangas is the coastal mountain of San Juan, Mt. Daguldul. The name ‘Daguldul’ or ‘Daguldol’ has been used since olden days. It has an onomatopoeic feeling – that of suspense and grandness. Maybe it describes the grandeur of the range and the abrupt rolling of its slopes.Actually a small mountain range, Mt. Daguldul has several ‘gems’ to offer. First, there is the unique seascape that greets the hiker on the intial beach trail. Then, there is trail, moderate in difficulty, passing by woodlands and light forests. In some parts, the greenery is total.",
            img1:img3,
            img2:img4
        }
    ]
  return (
    <div className= ''>
   {
    destinations.map((item, index)=>(
        <div key={index} className={`flex flex-col md:flex-row items-center  gap-20 mb-20 ${index % 2==0 ? "md:flex-row-reverse" :""}  `}>
         
         <div className=' flex gap-12 md:w-1/2'>
            <img src={item.img1} alt="img"  className='w-[44%] md:h-350 h-290 rounded-lg'/>
            <img src={item.img2} alt="img" className='w-[44%] md:h-350 h-290 rounded-lg' />
         </div>
         <div className='md:w-[45%]'>
            <h2 className='text-3xl font-bold pb-5 '>{item.title}</h2>
            <p>{item.paragraph}</p>
         </div>
        </div>
    ))
   }
    </div>
  )
}

export default Destinations