import React from 'react'
import AppBoxes from '../../components/AppBoxes';
import Swiper from '../../components/Swiper'
import Diagram from '../../components/Diagram';
import '../../Styles/Inteauto.css'

export default function InteAuto() {
  return (
    <div>
        <div>
            <img src="https://www.unitrestech.com/assets/images/banner4.png" alt="" id='banner-img'/>
            <h1 id='banner-text1'>
                Application
                Modernization
            </h1>
            <p id='banner-text2'>
                Revitalize, Innovate, Elevate: Your Path to Seamless
                Application Modernization.  
            </p>
        </div> 
        <div id='service-part-2'>
            <div>
                <h1>
                Application Modernization
                </h1>
                <p>
                Revitalize Your Heritage, Thrive in the Cloud.
                </p>
            </div>
            <div>
                <img src="https://www.unitrestech.com/assets/images/slide4.png" alt="" />
                <p>
                In the contemporary digital era, the imperative for application modernization has grown significantly. 
                Organizations need to reconfigure their application landscape to ensure resilience, responsiveness, and relevance 
                on an enterprise-wide scale.
                <br />
                <br />
                The Modernization approach employed by the Unitres team, driven by an AI-first strategy, enables businesses to 
                evolve into 'live enterprises.' This involves the seamless modernization of their legacy application landscape 
                without causing any disruptions to daily operations.
                </p>
            </div>
        </div>
        <div id='service-part-3'>
            <div>
                <h1>
                Our Application Modernization Competencies
                </h1>
            </div>
            <div>
                <AppBoxes />
            </div>
        </div>
        <div id='service-part-4'>
            <div>
            <h1>Types of Apps We Modernize</h1>
            </div>
            <Swiper />
        </div>
        <div id='service-part-5'>
            <h1>Application Modernization</h1>
            <div>
                <img src="https://www.unitrestech.com/assets/images/frame4_s4.png" alt="" />
                <img src="https://www.unitrestech.com/assets/images/frame4_s5.png" alt="" />
                <img src="https://www.unitrestech.com/assets/images/frame4_s6.png" alt="" />
                <img src="https://www.unitrestech.com/assets/images/frame4_s7.png" alt="" />
            </div>
        </div>
        <div>
            <Diagram />
        </div>
        <div>
        </div>
    </div>
  )
}
