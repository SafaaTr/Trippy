import React from 'react'
import Footer from '../components/Footer'


function AboutPage() {
  const contentAbout=[
    {
      title:"Our History",
      discreption:"Trippy is owned and managed by Trippy .In Pvt. Ltd., a leading brand in web designing services and e-commerce solutions. rippy .In Pvt. Ltd. is counted for its expertise in web solutions and its top ranking business portals. Our invincible expertise and rich experience has raised our client's expectation. Commendable success rate of other portals managed by Trippy is a live paradigm of our work excellence."
    },
    {
      title:"Our Mission",
      discreption:"Our mission is to touch the horizon where our capabilities may successfully meet with the requirements of our clients, that too with ultimate transparency and cost-effectiveness."
    },
    {
      title:"Our Vision",
      discreption:"To sow the seeds of par-excellence services with customer centric approach and reap the trust of worldwide clients"
    },
  ]
  
  return (
    <div>
    <div className="bg-[url('/images/aboutt.jpg')] h-457 w-full bg-center bg-cover flex justify-center items-center">
      <h1 className='text-white text-5xl font-bold'>About</h1>
    </div>
    <div className=' mx-20 my-30 md:mx-70 md:my-64'>
      {
        contentAbout.map((item, index)=>(
          <div key={index}>
            <h1 className='text-3xl font-semibold mb-16'>{item.title}</h1>
            <p className='pb-32'>{item.discreption}</p>
          </div>
        ))
      }
    </div>
      
      <Footer/>
    </div>
  )
}

export default AboutPage