import React from 'react'
import "../Styles/About.css"
import logo from "../images/logo.png"

export const Footer = () => {
  return (
    <div style={{paddingBottom:"20px"}}>
        {/* footer */}
        <div className='aboutcontainer-four'>
        <div ><h2 style={{fontSize:"30px", fontWeight:"700px", }}>Request for Services</h2>
            <div>
            <h5 style={{  }}>Email</h5>
            <div className='aboutcontainer-subfour'>
                <div><i class="fa-solid fa-envelope"></i></div>
                <div><p>info@unitrestech.com</p></div>
            </div>
            </div>
            <div>
            <p>Office</p>
            <div className='aboutcontainer-subfour'>
                <div><i class="fa-solid fa-location-dot"></i></div>
                <div><p>A/706 Sagar Tech Plaza, Above Balaji Show Room, Andheri Kurla, Mumbai - 400072</p></div>
            </div>
            </div>
        </div>

        <div style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", padding: "10px 10px",}}>
            <h3 style={{fontSize:"23px",fontWeight: "500"}}>Please feel free to contact us using form below</h3>
            <form action=""> <br />
            <input type="text" name="name" placeholder="Your Name" id="name" class="formdata" /> <br />
            <br /><input type="email" name="email" placeholder="Your Email Address" id="email" class="formdata" /><br />
            <br /><input type="text" name="subject" placeholder="Subject" id="subject" class="formdata" /><br />
            <br /><textarea name="msg" id="msg" cols="40" rows="5" placeholder="Enter your message" class="formdata" style={{
                fontFamily:`Plus Jakarta Sans, sans-serif`
            }}></textarea>
            <div style={{ display: "flex", justifyContent: "end"}}><input type="submit" value="Send Message" id="submitbtn"/></div>
            </form>
        </div>
        </div>

        {/* footerpart 2 */}

        <div className='containerfooter'>
        <div style={{width:"40%"}}><img src={logo} alt="logo" id="logoimg"/></div>
        <div>
            <div>
                <h6 style={{fontSize:"13px", fontWeight:"500"}}>RESOURCES</h6>
                <p className='footerTags'>Home</p>
                <p className='footerTags'>About</p>
                <p className='footerTags'>Blog</p>
                <p className='footerTags'> Careers</p>
                <p className='footerTags'>Why Choose Us</p>
            </div>
            <div>
                <h6 style={{fontSize:"13px", fontWeight:"500"}}>SERVICES</h6>
                <p className='footerTags'>Application Modernization</p>
                <p className='footerTags'>Cloud Engineering</p>
                <p className='footerTags'>Intelligent Automation</p>
                <p className='footerTags'>Data Analytics & Engineering</p>
            </div>
        </div>
        </div>

        <div className='containerfooterLast'>
        <div style={{color: "rgba(0, 0, 0, 0.5)"}}>Copyright © Unitres 2024</div>
        <div style={{ display: "flex", justifyContent:"space-between", columnGap:"20px", color:"green", }} className='footerTags'><div>Terms</div> <div>Privacy Policy</div></div>
        </div>
    </div>
  )
}
