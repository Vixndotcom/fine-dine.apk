import React from "react"
import img from "../images/catering-g418d44c5a_1280.jpg"
import Back from "../common/Back"
import "../home/location/style.css"
import Location from "../home/location/Location"

const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Services - Discover new Places' cover={img} />
        <div className='locate'>
          
          <Location />
          <br />
          
          {/* <button>Add a Listing <i class ='fa fa-thumb-tack'></i></button> */}
        </div>
      </section>
    </>
  )
}

export default Services
