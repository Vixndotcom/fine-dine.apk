import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
// import Services from "./service/Services"
import Recent from "./recent/Recent"
import Team from "./team/Team"
import Ads from "./ads/Ads"

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Services /> */}
      <Featured />
      <Recent />
      <Awards />
      <Location />
      <Ads />
      <Team />
      {/* <Price /> */}
    </>
  )
}

export default Home
