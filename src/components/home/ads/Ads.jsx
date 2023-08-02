import React from "react"
import Heading from "../../common/Heading"
import { ads, } from "../../data/Data"
import "./ads.css"

const Ads = () => {
  return (
    <>
      <section className='ads padding'>
        <div className='container'>
          <Heading title='To get Featured on our Weekly Feature' subtitle='Subscribe Today' />

          <div className='content  mtop'>
            {ads.map((item, index) => (
              <div className='box' key={index}>
                {/* <div className='img'> */}
                  <img src= {item.cover} alt="" />
                {/* </div> */}

                <h1>{item.num}</h1>
                <div className="desc">
                  <p>For just +999 per Month your Business gets exposure for 7days to our thousands of users</p>
{/* 
                  <div className='icon'>
                    
                  <img src= {item.icon} alt="" />
                   <h2>Call</h2>
              
                
                </div> */}

                </div>
                
                {/* <p>{item.name}</p> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Ads

