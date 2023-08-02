import React from "react"
import Back from "../common/Back"
// import RecentCard from "../home/team/Team.jsx"
import "../home/team/team.css"
import img from "../images/coffee-g8f4cdaf2b_1280.jpg"
import Team from "../home/team/Team.jsx"

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Blog -' title='Best Places to visit.' cover={img} />
        <br />
        <div className='bet Team'>
          <Team />
        </div>
      </section>
    </>
  )
}

export default Blog
