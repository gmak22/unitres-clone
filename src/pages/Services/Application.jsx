import React from 'react'
import AppBoxes from '../../components/AppBoxes';
import Swiper from '../../components/Swiper'
import Diagram from '../../components/Diagram';
import '../../Styles/Application.css'

export default function Application() {


  const SliderData = [
    {
      img:`https://www.unitrestech.com/assets/images/frame4_s1.png`,
      no:`01`,
      title:`Software Type`,
      desc:`
      . Web, mobile, and desktop app modernization
      . Enterprise application modernization (ERP, CRM, BPA, HCM, SCM, PPM, BI, data warehouses) & SaaS modernization.
      . IoT, big data applications, blockchain, AI/ML modernization`
    },
    {
      img:`https://www.unitrestech.com/assets/images/frame4_s2.png`,
      no:`02`,
      title:`Platforms`,
      desc:`
      . Dynamics 365
      . Salesforce
      . Magento
      . SharePoint
      . ServiceNow and other platforms`
    },
    {
      img:`https://www.unitrestech.com/assets/images/frame4_s3.png`,
      no:`03`,
      title:`Installed on`,
      desc:`
      . Cloud-based, on-premise, and hybrid servers.
      . Computers, laptops, mobile devices, and wearables.`
    }
  ]

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
            <Swiper SliderData={SliderData}/>
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
    </div>
  )
}
