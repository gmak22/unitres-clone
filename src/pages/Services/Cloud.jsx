import React from 'react'
import cloudEngg from '../../images/cloud-engg.png'
import '../../Styles/Cloud.css'

export default function Cloud() {
  return (
    <div className='cloud-model'>
      <div className='cloud-top'>
        <img src={cloudEngg} alt='Cloud Engineering' />
        <div className='cloud-overlay'>
          <p className='cloud-description'>Cloud Native Platform Engineering</p>
          <p className='cloud-heading'>Cloud-Native Development</p>
          <p className='cloud-description'>Unlish the power of Clound : Elevate , Innovate , Illuminate</p>
        </div>
      </div>

      <div className='cloud-second'>
        <div className='cloud-second-left'>
          <p className='cloud-second-head'>Cloud Migration and Modernization</p>
          <p className='cloud-second-description'>Modernizing outdated or legacy systems is essential for businesses to progress in the digital era, with the focal point of any modernization approach being the incorporation of cloud technologies. Through the efficient deployment of cloud solutions, organizations can realize desired results such as heightened agility, improved customer experiences, quicker time-to-market, and increased innovation. Unitres guides enterprises comprehensively through their cloud transformations.</p>
        </div>
        <div className='cloud-second-right'>
          <img src='https://unitrestech.com/assets/images/image6.png' alt='' />
        </div>
      </div>

      <div className='cloud-content-model'>
        <p className='cloud-content-heading'>Cloud computing : Benefits</p>
        <div className='cloud-content-container'>
          <div className='cloud-contnet-left'>
            <div>
              <img src='https://www.unitrestech.com/assets/images/21.svg' alt='' />
              <p className='cloud-content-head'>Cost Efficiency</p>
              <ul className='cloud-content-description'>
                <li>Pay-as-You-Go Model: Users pay only for the resources they consume, allowing for more efficient cost management.</li>
                <li>Reduced Capital Expenditure: Eliminates the need for large upfront investments in hardware and infrastructure.</li>
              </ul>
            </div>

            <div>
              <img src='https://www.unitrestech.com/assets/images/24.svg' alt='' />
              <p className='cloud-content-head'>Security</p>
              <ul className='cloud-content-description'>
                <li>Professional Expertise: Cloud providers invest heavily in security measures and employ dedicated teams of experts to protect data.</li>
                <li>Data Encryption: Data transmission and storage are often encrypted to enhance security.</li>
              </ul>
            </div>

            <div>
              <img src='https://www.unitrestech.com/assets/images/27.png' alt='' />
              <p className='cloud-content-head'>Easy to consume</p>
              <p className='cloud-content-description'>Cloud improves agility with standardized “appliance-like” service that can be provisioned in minutes in an aaSOpex model, saving approximately 50% in start-up time.</p>
            </div>
          </div>

          <div className='cloud-content-middle'>
            <div>
              <img src='https://www.unitrestech.com/assets/images/22.png' alt='' />
              <p className='cloud-content-head'>Cloud operating model</p>
              <p className='cloud-content-description'>More efficient cloud operating models are powered by analytics, automation, and AI, with a saving of approximately 30%-50% in ongoing run operations.</p>
            </div>

            <div>
              <img src='https://www.unitrestech.com/assets/images/25.png' alt='' />
              <p className='cloud-content-head'>Innovation and Competitive Edge</p>
              <ul className='cloud-content-description'>
                <li>Focus on Core Competencies: Allows businesses to focus on their core activities, leaving the management of IT infrastructure to specialized providers.</li>
                <li>Access to Advanced Technologies</li>
              </ul>
            </div>
          </div>

          <div className='cloud-content-right'>
            <div>
              <img src='https://www.unitrestech.com/assets/images/23.png' alt='' />
              <p className='cloud-content-head'>Flexibility and Agility</p>
              <ul className='cloud-content-description'>
                <li>Rapid Deployment: Quickly provision and deploy services without the delays associated with traditional infrastructure setup.</li>
                <li>Adaptability: Easily adjust to evolving business needs and market conditions</li>
              </ul>
            </div>

            <div>
              <img src='https://www.unitrestech.com/assets/images/26.svg' alt='' />
              <p className='cloud-content-head'>Scalability</p>
              <ul className='cloud-content-description'>
                <li>On-Demand Resources: Easily scale up or down based on changing workloads, ensuring optimal performance and resource utilization.</li>
                <li>Global Reach: Cloud services are accessible from anywhere in the world, supporting global scalability</li>
              </ul>
            </div>

            <div>
              <img src='https://www.unitrestech.com/assets/images/28.png' alt='' />
              <p className='cloud-content-head'>Reliability and Availability</p>
              <ul className='cloud-content-description'>
                <li>Redundancy: Cloud providers often have multiple data centers across different geographic locations, reducing the risk of service downtime.</li>
                <li>Service Level Agreements (SLAs): Providers offer SLAs that guarantee a certain level of service availability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='cloud-help-model'>
        <p className='cloud-help-heading' style={{ marginBottom: '0' }}>How Unitres can help</p>
        <p className='cloud-help-description' style={{ textAlign: 'center' }}>Helping enterprises take advantage of the cloud to realize business benefits.</p>
        <div className='cloud-help-container'>
          <div>
            <img src='https://www.unitrestech.com/assets/images/29.svg' alt='' />
            <p className='cloud-help-head'>Enabling enterprises to assess their current state and suggest the best way forward.</p>
            <p className='cloud-help-description'>Evaluate the technology environment of the client, develop an effective cloud strategy, select appropriate technology and commercial options tailored to their business requirements, and outline a cloud adoption plan that aligns with their transformative goals.</p>
          </div>

          <div>
            <img src='https://www.unitrestech.com/assets/images/20.svg' alt='' />
            <p className='cloud-help-head'>Helping enterprises adopt cloud and take advantage of the benefits of cloud computing.</p>
            <p className='cloud-help-description'>When it is crucial for an enterprise to swiftly embrace cloud technology in order to achieve business goals, we facilitate an expedited transition by hosting and re-platforming applications and databases in the cloud. We also incorporate top-notch cloud Platform as a Service (PaaS) solutions. Our platform-driven automation streamlines the migration process into a factory model, minimizing efforts and enabling them to achieve their objectives more rapidly.</p>
          </div>

          <div>
            <img src='https://www.unitrestech.com/assets/images/201.svg' alt='' />
            <p className='cloud-help-head'>Modernize and rearchitect enterprises’ applications to cloud native services..</p>
            <p className='cloud-help-description'>We support businesses in revitalizing their legacy systems and fortifying their technological infrastructure by helping them envision a fully cloud-native approach for their applications. This includes utilizing APIs, microservices, containers, serverless architecture, and NoSQL databases. Customized Application Development platform streamlines the complexities of this transition, extracts valuable data from legacy systems, and employs hyper-automation to reduce dependence on specialized skills. This holistic approach allows enterprises to accelerate their transformation journey.</p>
          </div>

        </div>



      </div>

      <div className='bottom-container1'>
        <div>
          <img src='https://unitrestech.com/assets/images/v1.png' alt='Cloud Advisory and Consulting' />
          <p>Cloud Advisory and Consulting</p>
        </div>
        <p>Migration and modernization strategy</p>
        <p>Migration assessment and planning</p>
        <p>Cloud cost management</p>
      </div>

      <div className='bottom-container2'>
        <div>
          <img src='https://unitrestech.com/assets/images/v2.png' alt='Cloud Migration' />
          <p>Cloud Migration</p>
        </div>
        <p>Application and database rehosting and remediation</p>
        <p>Application and database re-platforming</p>
        <p>PaaS service adoption Migration to Managed Kubernetes</p>
      </div>

      <div className='bottom-container3'>
        <div>
          <img src='https://unitrestech.com/assets/images/v3.png' alt='Cloud Advisory' />
          <p>Cloud Advisory and Consulting</p>
        </div>
        <p>Migration and modernization strategy</p>
        <p>Migration assessment and planning</p>
        <p>Cloud cost management</p>
      </div>
    </div>
  )
}
