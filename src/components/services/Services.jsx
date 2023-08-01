import React from "react"
import img from "../images/catering-g418d44c5a_1280.jpg"
import Back from "../common/Back"
import "../home/featured/Featured.css"
import FeaturedCard from "../home/featured/FeaturedCard"

const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
        <div className='featured container'>
          
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Services
