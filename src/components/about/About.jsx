import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/restaurant-gdfe0820ed_1280.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - What we do?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='We are a directory for all kinds of Dinning Experience' subtitle='Founded in 2020 by ...' />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button className='btn20'>Learn More</button>
          </div>
          <div className='right row'>
            <img src='./cutlery.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
