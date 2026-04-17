import React from 'react'
import card1 from '/images/card1.jpg'
import card2 from '/images/card2.jpg'
import card3 from '/images/card3.jpg'

function Card() {
    const contentCard=[
        {
            img:card1, 
            title:"Trip in Indonesia",
            description:"Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"
        },
        {
            img:card2, 
            title:"Trip in Malaysia ",
            description:"Malaysia, is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions, Peninsular Malaysia and Borneo's East Malaysia"
        },
        {
            img:card3, 
            title:"Trip in France",
            description:"France, officially the French Republic is a transcontinental country predominantly located in Western Europe and spanning overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans."
        },
    ]
  return (
    <div className='md:flex justify-center gap-20  items-center'>
        {
            contentCard.map((item, index)=>(
                <div key={index} className='md:w-375 mx-20 md:mx-0 w-350 h-430 shadow-2xl p-16 rounded-lg'>
                    <img src={item.img} alt="card1" className='w-full h-200 object-cover rounded-lg ' />
                    <div className='w-full'>
                    <h2 className='text-xl font-semibold text-[#2a2a2a] my-10'>{item.title}</h2>
                    <p>{item.description}</p>
                    </div>
                 
                </div>
            ))
        }
    </div>
  )
}

export default Card