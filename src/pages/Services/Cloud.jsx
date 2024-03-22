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
          <p>Cloud Migration and Modernization</p>
          <p>Modernizing outdated or legacy systems is essential for businesses to progress in the digital era, with the focal point of any modernization approach being the incorporation of cloud technologies. Through the efficient deployment of cloud solutions, organizations can realize desired results such as heightened agility, improved customer experiences, quicker time-to-market, and increased innovation. Unitres guides enterprises comprehensively through their cloud transformations.</p>
        </div>
        <div className='cloud-second-right'>
          <img src='https://unitrestech.com/assets/images/image6.png' alt='' />
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
