import React from "react"
import { featured } from "../../data/Data"

const FeaturedCard = () => {
  return (
    <>
      <div className='content grid4 mtop'>
        {featured.map((items, index) => (
          <div className='box' key={index}>
            {/* <img src = {items.cover} alt=''/> */}
            <h3>{items.name}</h3> 
            <label>{items.total}</label>
            
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard
