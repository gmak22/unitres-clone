import React from 'react';

import "../Styles/About.css";
import AboutImageOne from '../images/AboutImageOne.png';
import aboutus_Second from '../images/aboutus_Second.png'
import CEO from '../images/CEO.jpg'
import subhas from '../images/subhas.jpg'
import Nivedita from '../images/Nivedita.jpg'
import { Footer } from '../components/Footer';

export default function About() {
  return (
    <div className="about">
      <div>
        <img src={AboutImageOne} className="fullViewportImg" alt="AboutImageOne"></img>
      </div>

      {/* 2nd */}
      <div className='aboutConatinertwo'>
        <div className='aboutusOne'>
          <div className='aboutusOneConatinerone' style={{}}>
            <div><h2 className='aboutusTextOne'>About Us</h2></div>
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
        <div  style={{textAlign:"center", marginTop:"50px", fontSize:"25px",fontWeight: "700"}}><h2>Leadership Team</h2></div>
        <div className='container_three'>
          <div>
            <div style={{ fontSize: "bold" }}><h4>Passionate Technology Delivery Leader with a wealth of experience</h4></div>
            <div style={{ color: "rgba(0, 0, 0, 0.5)" }}><p>diverse domains, including Banking, Insurance, and Payments. With a global perspective, successfully navigated through various
              geographies, such as the USA, Africa, UAE, and Europe.</p>
            </div>

            <div className='container_threesub'>
              <div><img src={CEO} alt="CEO" className='imgperson' /></div>
              <div className='container_threesubPosition'>
                <div><p>Santosh Shetty</p></div>
                <div style={{ marginTop: "-10px", color: "rgba(0, 0, 0, 0.5)" }}><p>CEO</p></div>
              </div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: "bold" }}><h4>Experience in Cloud Engineering, Application Development, and Data Engineering.</h4></div>
            <div style={{ color: "rgba(0, 0, 0, 0.5)" }}><p>His global experience and collaboration with Fortune 500 clients underscore his
              ability to drive successful outcomes in diverse and challenging environments.</p>
            </div>

            <div className='container_threesub'>
              <div><img src={subhas} alt="CEO" className='imgperson' /></div>
              <div className='container_threesubPosition'>
                <div><p>Suhas Birje</p></div>
                <div style={{ marginTop: "-10px", color: "rgba(0, 0, 0, 0.5)" }}><p>Chief Technologist</p></div>
              </div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: "bold" }}><h4>HR leader with a rich background encompassing all facets of human resources functions.</h4></div>
            <div style={{ color: "rgba(0, 0, 0, 0.5)" }}><p>With over 15 years of extensive experience, she has demonstrated a profound understanding
              of the HR landscape and a proven track record of achieving tangible results.</p>
            </div>

            <div className='container_threesub'>
              <div><img src={Nivedita} alt="CEO" className='imgperson' /></div>
              <div className='container_threesubPosition'>
                <div><p>Nivedita Shetty</p></div>
                <div style={{ marginTop: "-10px", color: "rgba(0, 0, 0, 0.5)" }}><p>Head HR</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
