import React from 'react';
import "../Styles/Appbox.css"

export default function AppBoxes() {

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

  return (
    <div id='container'>
      {
        BoxDeatil.map((ele,ind)=>
        <div id='sub-container'>
          <img src={ele.img} alt="" />
          <h2>{ele.title}</h2>
          <p>{ele.desc}</p>
        </div>
        )
      }
    </div>
  )
}
