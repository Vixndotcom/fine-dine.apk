import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Our Menu' subtitle='Find All Food Outlets.' />
         
          <FeaturedCard />
          <br />
      
          <button>Add a Listing <i class ='fa fa-thumb-tack'></i></button>
        </div>
      </section>
    </> 
  )
} 

export default Featured
