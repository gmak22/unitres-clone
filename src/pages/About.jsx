import React from 'react';
import "./styles/About.css";
import AboutImageOne from './photos/AboutImageOne.png';
import aboutus_Second from './photos/aboutus_Second.png'
import CEO from './photos/CEO.jpg'

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
            <div><p>Passionate Technology Delivery Leader with a wealth of experience</p></div>
            <div><p>diverse domains, including Banking, Insurance, and Payments. With a global perspective, successfully navigated through various
              geographies, such as the USA, Africa, UAE, and Europe.</p>
            </div>
            <div className='container_threesub'>
              <div><img src={CEO} alt="CEO" className='imgperson' /></div>
              <div>
                <div><p>Santosh Shetty</p></div>
                <div><p>CEO</p></div>
              </div>
            </div>
          </div>
          <div>
            <div><p>Passionate Technology Delivery Leader with a wealth of experience</p></div>
            <div><p>diverse domains, including Banking, Insurance, and Payments. With a global perspective, successfully navigated through various
              geographies, such as the USA, Africa, UAE, and Europe.</p>
            </div>
            <div>
              <div><img src={CEO} alt="CEO" className='imgperson' /></div>
              <div>
                <div><p>Santosh Shetty</p></div>
                <div><p>CEO</p></div>
              </div>
            </div>
          </div>
          <div>
            <div><p>Passionate Technology Delivery Leader with a wealth of experience</p></div>
            <div><p>diverse domains, including Banking, Insurance, and Payments. With a global perspective, successfully navigated through various
              geographies, such as the USA, Africa, UAE, and Europe.</p>
            </div>
            <div>
              <div><img src={CEO} alt="CEO" className='imgperson' /></div>
              <div>
                <div><p>Santosh Shetty</p></div>
                <div><p>CEO</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
