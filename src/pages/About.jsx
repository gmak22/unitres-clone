import React from 'react';

import "./Styles/About.css";
import AboutImageOne from './Photos/AboutImageOne.png';
import aboutus_Second from './Photos/aboutus_Second.png'
import CEO from './Photos/CEO.jpg'
import subhas from './Photos/subhas.jpg'
import Nivedita from './Photos/Nivedita.jpg'
import logo from "./Photos/logo.png"

export default function About() {
  return (
    <div className="about">
      <div>
        <img src={AboutImageOne} className="fullViewportImg" alt="AboutImageOne"></img>
      </div>

      {/* 2nd */}
      <div className='aboutConatinertwo'>
        <div className='aboutusOne'>
          <div className='aboutusOneConatinerone' style={{ width: "50%", }}>
            <div><h1 className='aboutusTextOne'>About Us</h1></div>
            <div className='aboutusTextTwo'>
              <p>UNITRES enables companies to explore and adopt new age technologies that cater to ongoing business demands.
                Our intelligent and customized talent acquisition solutions will ensure the best Technology,
                Hiring & Outsourcing experiences.
                Our expertise in identifying global leaders have helped many organizations to accelerate their growth.</p>
            </div>
          </div>
          <div style={{ width: "50%", }}>
            <img src={aboutus_Second} alt="aboutus_Second" style={{ width: "100%" }} />
          </div>
        </div>
      </div>

      {/* 3rd */}
      <div className='container-three'>
        <div><h1>Leadership Team</h1></div>
        <div className='container_three'>
          <div>
            <div style={{fontSize:"bold"}}><p>Passionate Technology Delivery Leader with a wealth of experience</p></div>
            <div style={{color:"rgba(0, 0, 0, 0.5)"}}><p>diverse domains, including Banking, Insurance, and Payments. With a global perspective, successfully navigated through various
              geographies, such as the USA, Africa, UAE, and Europe.</p>
            </div>

            <div className='container_threesub'> 
              <div><img src={CEO} alt="CEO" className='imgperson'/></div>
              <div className='container_threesubPosition'>
                <div><p>Santosh Shetty</p></div>
                <div style={{marginTop:"-10px",color:"rgba(0, 0, 0, 0.5)"}}><p>CEO</p></div>
              </div>
            </div>
          </div>
          <div>
            <div style={{fontSize:"bold"}}><p>Experience in Cloud Engineering, Application Development, and Data Engineering.</p></div>
            <div style={{color:"rgba(0, 0, 0, 0.5)"}}><p>His global experience and collaboration with Fortune 500 clients underscore his
              ability to drive successful outcomes in diverse and challenging environments.</p>
            </div>

            <div className='container_threesub'> 
              <div><img src={subhas} alt="CEO" className='imgperson'/></div>
              <div className='container_threesubPosition'>
                <div><p>Suhas Birje</p></div>
                <div style={{marginTop:"-10px",color:"rgba(0, 0, 0, 0.5)"}}><p>Chief Technologist</p></div>
              </div>
            </div>
          </div>
          <div>
            <div style={{fontSize:"bold"}}><p>HR leader with a rich background encompassing all facets of human resources functions.</p></div>
            <div style={{color:"rgba(0, 0, 0, 0.5)"}}><p>With over 15 years of extensive experience, she has demonstrated a profound understanding
              of the HR landscape and a proven track record of achieving tangible results.</p>
            </div>

            <div className='container_threesub'> 
              <div><img src={Nivedita} alt="CEO" className='imgperson'/></div>
              <div className='container_threesubPosition'>
                <div><p>Nivedita Shetty</p></div>
                <div style={{marginTop:"-10px",color:"rgba(0, 0, 0, 0.5)"}}><p>Head HR</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* footer */}
      <div className='aboutcontainer-four'>
        <div>Request for Services
          <div>
            <p style={{fontSize: "12px"}}>Email</p>
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

        <div style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", padding:"0px 5px",fontSize:"15px"}}>Please feel free to contact us using form below
          <form action=""> <br />
            <input type="text" name="name" placeholder="Your Name" id="name" class="formdata"/> <br />
            <br /><input type="email" name="email" placeholder="Your Email Address" id="email"class="formdata" /><br />
            <br /><input type="text" name="subject" placeholder="Subject"  id="subject" class="formdata"/><br />
            <br /><textarea name="msg" id="msg" cols="40" rows="5" placeholder="Enter your message"class="formdata"></textarea>
            <div style={{display:"flex", justifyContent:"end"}}><input type="submit" value="Send Message" /></div>
          </form>
        </div>
      </div>
      
      {/* footerpart 2 */}

      <div className='containerfooter'>
        <div><img style={{width:"40vh"}} src={logo} alt="" /></div>
        <div>
          <p>RESOURCES</p>
          <p>About</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Why Choose Us</p>
        </div>
        <div>
          <p>SERVICES</p>
          <p>Application Modernization</p>
          <p>Cloud Engineering</p>
          <p>Intelligent Automation</p>
          <p>Data Analytics & Engineering</p>
        </div>
      </div>

      <div className='containerfooter'>
        <div>Copyright © Unitres 2024</div>
        <div style={{display:"flex", gap:"20px", marginRight:"-20%"}}><div>Terms</div> <div>Privacy Policy</div></div>
      </div>
    </div>
  )
}
