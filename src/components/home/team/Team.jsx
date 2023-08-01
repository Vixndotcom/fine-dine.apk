import React from "react"
import Heading from "../../common/Heading"
import { team } from "../../data/Data"
import "./team.css"

const Team = () => {
  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title='Our Weekly Feature' subtitle='Only the Best. Make reservations Today!' />
          {/* <p className="weekly">Contact us if you'll like your Buisness to be a part of the weekly feature</p> */}
          <div className='content mtop grid3'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                <button className='btn7'>{val.list}<i className='fa fa-star'></i> </button>
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    {/* <i className='fa-solid fa-circle-check'></i> */}
                  </div>
                  <i className='fa fa-location-dot'></i>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>

                  <ul>
                    {val.icon.map((icon, index) => (
                      <li key={index}>{icon}</li>
                    ))}
                  </ul>
                  {/* <div className='button-book'> */}
              
                    <button className='btn8'>
                    <p>
                      {/* <i className='fa fa-envelope'></i> */}
                      Book a Reservation <i className='fa fa-3x fa-phone'></i>
                    </p>
                     
                    </button>
                  {/* </div> */}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Team
