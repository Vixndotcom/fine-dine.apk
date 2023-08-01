import React from "react"
import Heading from "../../common/Heading"
import { location } from "../../data/Data"
import "./style.css"

const Location = () => {
  return (
    <>
      <section className='location padding'>
        <div className='container'>
          <Heading title='Explore Menu' subtitle='Find Cuisines based on Location. Search places closest to use' />

          <div className='content grid3 mtop'>
            {location.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.menu}</h5>
                  <p>
                    {/* <label>{item.menu}</label><br /> */}
                    <label>{item.Restaurants}</label><br /></p>
                   <h4> <i className='fa fa-location-dot'></i>{item.City} </h4>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location
