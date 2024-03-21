import React from 'react';
import "../Styles/Diagram.css";

const Diagram = () => {
  return (
    <>
    <div id='main-container'>
      <div id='first-container'>
        <p id='a'>Process Identification</p>
        <p id='b'>
          Data Collection and Preparation
        </p>
        <p id='c'>
          Development & Integration
        </p>
        <p id='d'>
          Proof of Concept(POC)
        </p>
        <p id='e'>
          Technology Selection
        </p>
        <p id='f'>
          Deployment
        </p>
      </div>
      <div id='second-container'>
        <p id='g'>Assesment & Goal Setting</p>
        <div id='circle'>
          <h1>Assessment and Goal Setting</h1>
          <p>
            Identify your organization's specific needs and goals for automation. 
            Understand which business processes can benefit the most from automation. 
            Define clear and measurable objectives, such as cost reduction, process optimization, 
            or improved customer service.
          </p>
        </div>
        <p id='h'>Change Management</p>
      </div>
      <div id='third-container'>
        <p id='i'>Cost-Benefits Analysis</p>
        <p id='j'>Documentation & Knownledge Transfer</p>
        <p id='k'>Feedback Loop</p>
        <p id='l'>Compliance and Security</p>
        <p id='m'>
          Scalability and Expansion
        </p>
        <p id='n'>Monitoring and Optimization </p>
      </div>
    </div>
    </>
  );
};

export default Diagram;