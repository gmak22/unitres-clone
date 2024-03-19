import React from 'react';
import "./Styles/About.css";
import AboutImageOne from './Photos/AboutImageOne.png';
import aboutus_Second from './Photos/aboutus_Second.png'

export default function About() {
  return (
    <div className="about">
      <div>  
        <img src={AboutImageOne} className="fullViewportImg" alt="AboutImageOne"></img>
      </div>

        {/* 2nd */}
      <div className='aboutConatinertwo'>
        <div className='aboutusOne'>
          <div className='aboutusOneConatinerone'style={{width: "50%",}}>
              <div><h1>About Us</h1></div>
              <div>
                  <p>UNITRES enables companies to explore and adopt new age technologies that cater to ongoing business demands.
                      Our intelligent and customized talent acquisition solutions will ensure the best Technology,
                      Hiring & Outsourcing experiences.
                      Our expertise in identifying global leaders have helped many organizations to accelerate their growth.</p>
              </div>
          </div>
          <div style={{width: "50%",}}>
              <img src={aboutus_Second} alt="aboutus_Second" style={{width:"100%"}}/>
          </div>
        </div>
      </div>
    </div>
  )
}