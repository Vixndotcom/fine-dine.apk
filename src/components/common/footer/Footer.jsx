import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              {/* <img src="img\" alt="" /> */}
              <h1>Contact Us</h1>
              <p>We'll help you link up <br />with what you need.</p>
            </div>
            {/* <img src='../images/f2.png' alt='' /> */}
           <span> <i class='fa fa-phone fa-3x'></i>

            <button className='btn5'>Message</button> </span>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
             
               <i class='fa fa-cutlery fa-2x'></i>
              <h2>Join the Network</h2>
              <p>Receive updates when a new place opens around you and so many more.
                 As a business owner we have even more juicy deals for you!</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                
              </div>
              <button>Subscribe</button>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2023</span>
      </div>
    </>
  )
}

export default Footer
