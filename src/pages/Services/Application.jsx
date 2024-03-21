import React from 'react'
import AppBoxes from '../../components/AppBoxes';
import Swiper from '../../components/Swiper'
import Diagram from '../../components/Diagram';
import '../../Styles/Application.css'

export default function Application() {




  const BoxDeatil = [
    {
      img:`https://www.unitrestech.com/assets/images/frame4.svg`,
      title:`Application reengineering`,
      desc:`With a wide pool of legacy application modernization skills, 
      we can help you restore and slightly modify code and design of your 
      long-running enterprise applications. The apps with modern modular 
      architectures are easier to maintain and evolve, and they can benefit 
      from distributed computing, cloud elasticity and resilience. Nowadays, 
      our clients tend to get maximum value from service-oriented architecture 
      (SOA), microservices, and serverless implementations.`
    },
    {
      img:`https://www.unitrestech.com/assets/images/frame5.svg`,
      title:`Legacy app migration to cloud`,
      desc:`Depending on the application and business needs, Unitres offers one of 
      the three ways to the cloud – application re-hosting, application 
      re-platforming or a cloud-native implementation.`
    },
    {
      img:`https://www.unitrestech.com/assets/images/frame6.svg`,
      title:`Regulatory compliance`,
      desc:`Our compliance consultants, cybersecurity engineers, and software 
      developers help ensure that your apps comply with applicable laws and 
      regulations (HIPAA, PCI DSS, GDPR, and others). They assess your software 
      and its design, development, testing, and deployment processes, identify gaps 
      in your compliance program and develop a customized plan to address them.`
    },
    {
      img:`https://www.unitrestech.com/assets/images/frame7.svg`,
      title:`Application modernization consulting`,
      desc:`We thoroughly investigate your legacy application code and infrastructure, 
      mine requirements, and provide detailed guidance on the improvements that can help 
      you to derive max value from previous investments.`
    },
    {
      img:`https://www.unitrestech.com/assets/images/frame8.svg`,
      title:`Data modernization`,
      desc:`We revamp an approach to data management and upgrade data 
      systems to set up fast, scalable and secure data analytics within your 
      company. We implement self-service BI and apply various data visualization 
      techniques to let you generate on-demand reports and grab enlightening data insights.`
    },
    {
      img:`https://www.unitrestech.com/assets/images/frame9.svg`,
      title:`Mobile and cross-platform compatibility`,
      desc:`Our designers and developers help businesses ensure their software 
      offers seamless experiences across platforms and devices. We thoroughly review 
      your solution to identify any potential compatibility issues (like functionality and 
        display problems, security conflicts) and provide recommendations for remediation.`
    }
  ]


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
                <AppBoxes BoxDeatil={BoxDeatil}/>
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
