import {useState} from 'react'
import css from "../Styles/Diagram2.css";

export const Diagram2 = () => {

    const [selectedItem, setSelectedItem] = useState(null);

    let data=[
       {    name:"Assessment and Goal Setting",
            info : "Identify your organization's specific needs and goals for automation. Understand which business processes can benefit the most from automation. Define clear and measurable objectives, such as cost reduction, process optimization, or improved customer service.",
            value:true
       },
        {
            name:"Process Identification",
            info : "Identify the processes that are suitable for automation. Consider repetitive, rule-based, and time-consuming tasks as potential candidates.Prioritize processes based on their impact on your business goals and the ease of automation.",
            value:false
        },
        {   
            name:"Cost-Benefit Analysis",
            info:"Regularly assess the cost-benefit of your automation strategy to ensure that it continues to align with your organization's goals and budget.",
            value:false
        },
        {
            name:"Data Collection and Preparation",
            info :"Gather and clean relevant data needed for automation. High-quality data is crucial for training machine learning models and ensuring accurate decision-making.Develop data governance and data security protocols to protect sensitive information", 
            value : false
        },
        {
            name:"Documentation and Knowledge Transfer",
            info :"Document all automation processes, configurations, and procedures to ensure sustainability and knowledge transfer within the organization.", 
            value : false
        },
        {
            name:"Development and Integration",
            info :"Develop automation workflows, scripts, and AI models to handle the identified processes. Ensure integration with existing systems and software to facilitate seamless data exchange.", 
            value : false
        },
        {
            name:"Feedback Loop",
            info :"Establish a feedback loop with employees, customers, and stakeholders to gather insights and feedback for further improvements.", 
            value : false
        },
        {
            name:"Proof of Concept (PoC)",
            info :"Start with a small-scale PoC to validate the chosen automation technology and its applicability to your selected processes.Measure the PoC's success against predefined KPIs.", 
            value : false
        },
        {
            name:"Compliance and Security",
            info :"Ensure that your automation strategy complies with relevant regulations and standards. Implement strong security measures to protect data and prevent breaches.", 
            value : false
        },
        {
            name:"Technology Selection",
            info :"Research and select the appropriate technology stack for intelligent automation. This may include Robotic Process Automation (RPA), Artificial Intelligence (AI), Machine Learning (ML), and natural language processing (NLP) tools.", 
            value : false
        },
        {
            name:"Scalability and Expansion",
            info :"As your organization gains experience with automation, look for opportunities to scale the deployment to cover more processes.Consider expanding automation to other departments or areas of the business.", 
            value : false
        },
        {
            name:"Deployment",
            info :"Roll out automation solutions gradually, starting with less critical processes and gradually moving to mission-critical ones.Monitor the performance of automation in real-world scenarios and make necessary adjustments.", 
            value : false
        },
        {
            name:"Monitoring and Optimization",
            info :"Implement continuous monitoring of automated processes to detect and resolve any anomalies or inefficiencies. Use analytics and reporting to measure the impact of automation on your defined KPIs and adjust the strategy as needed.", 
            value : false
        },
        {
            name:"Change Management",
            info :"Prepare employees for the changes brought by automation. Offer training and create a supportive culture for automation adoption.Communicate the benefits and positive impacts of automation to gain buy-in from all stakeholders.", 
            value : false
        }

    ]

    const handleChange = (index) => {
        setSelectedItem(index);
    }

  return (
    <div className="mainDiagram">
        <div onClick={() => handleChange(0)}><p>Assessment and Goal Setting</p></div>
        <div className="diagram-component" style={{gap:"350px"}}>
            <div onClick={() => handleChange(1)}><p>Process Identification</p></div>
            <div onClick={() => handleChange(2)}><p>Cost-Benefit Analysis</p></div>
        </div>
        <div className="diagram-component" style={{gap:"500px"}}>
            <div onClick={() => handleChange(3)} style={{}}><p>Data Collection and Preparation</p></div>
            <div onClick={() => handleChange(4)} style={{}}><p>Documentation and Knowledge Transfer</p></div>
        </div>
        <div className="diagram-component" style={{gap:"600px"}}>
            <div onClick={() => handleChange(5)}><p>Development and Integration</p></div>
            <div onClick={() => handleChange(6)} style={{}}><p>Feedback Loop</p></div>
        </div>
        <div className="diagram-component" style={{gap:"550px"}}> 
            <div onClick={() => handleChange(7)}><p>Proof of Concept (PoC)</p></div>
            <div onClick={() => handleChange(8)}><p>Compliance and Security</p></div>
        </div>
        <div className="diagram-component"style={{gap:"500px"}}>
            <div onClick={() => handleChange(9)}><p>Technology Selection</p></div>
            <div onClick={() => handleChange(10)}><p>Scalability and Expansion</p></div>
        </div>
        <div className="diagram-component" style={{gap:"450px"}}>
            <div onClick={() => handleChange(11)}><p>Deployment</p></div>
            <div onClick={() => handleChange(12)}><p>Monitoring and Optimization</p></div>
        </div >
        <div onClick={() => handleChange(13)} style={{backgroundColor:"green"}}><p>Change Management</p></div>

        <div className='circle_dig'>
            {selectedItem !== null ? (
                <div>
                    <h1>{data[selectedItem].name}</h1>
                    <p>{data[selectedItem].info}</p>
                </div>
            ):
                <div>
                    <h1>Assessment and Goal Setting</h1>
                    <p>
                    Identify your organization's specific needs and goals for automation. Understand which business processes can benefit the most from automation. Define clear and measurable objectives, such as cost reduction, process optimization, or improved customer service.
                    </p>
                </div>
            }
        </div>
    </div>
  )
}
