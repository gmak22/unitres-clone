import {useEffect, useState} from 'react'
import career from "../images/career.png"
import '../Styles/Career.css'

export const Careers = () => {
  const [openDetails, setOpenDetails] = useState({
    openDetails1:true,
    openDetails2:false,
    openDetails3:false,
    openDetails4:false,
    openDetails5:false
  });
  

  const toggleDetails = (jobNumber) => {
    setOpenDetails(prevState => ({
      ...prevState,
      [jobNumber]: !jobNumber
    }));
  };

  
  useEffect(()=>{

  },[openDetails.openDetails1,openDetails.openDetails2])
  return (
    <div>
      <div><img src={career} alt="career" className="fullViewportImg"/></div>
      <div className='careerContainerOne'>
        <div>
          <h1 style={{textAlign:"center"}}>Job Opening</h1>
        </div>
        <div>
          <p style={{color: openDetails.openDetails1 ? "green" : "black"}}> Full Stack Developer</p>
          <details open={openDetails.openDetails1} onClick={() => toggleDetails("openDetails1")} >
          <summary className='Careerdeatils'></summary>
          <h5>Location : Mumbai</h5>
          <h5>Job positions: 3</h5>
          <h5>Job Description:</h5>
          <p className='CareerContainertwo'>As a Senior Full Stack Developer at UNITRES, you will spearhead the creation of comprehensive platforms
            utilizing a diverse array of technologies. Your role will encompass the complete product development lifecycle,
            from conceptualization to deployment and ongoing maintenance of features. Your responsibilities include crafting clean,
            functional code for both front-end and back-end systems, ensuring consistency across the platform, and enhancing user experience.
            You will collaborate closely with our development team, prioritize system optimization for mobile responsiveness, and conduct UI
            tests for performance enhancements.Your contributions will directly impact the stability and usability of our products.</p>
            <h5>Candidate Requirements:</h5>
            <ul className='CareerContainertwo'>
              <li>Proficient in both front-end and back-end languages.</li>
              <li>Competency in multiple back-end languages such as NODE, Java, and Python, along with JavaScript frameworks like Angular, React, and Vue.</li>
              <li>Familiarity with various front-end languages and libraries including HTML, CSS, and JavaScript.</li>
              <li>Knowledgeable in databases like MySQL and MongoDB, web servers (e.g., Apache), and UI/UX design principles.</li>
              <li>Skilled in testing and debugging processes.</li>
              <li>Aesthetic sensibility for layout design.</li>
              <li>Analytical mindset with excellent time management skills.</li>
              <li>Strong communication and problem-solving abilities.</li>
              <li>Enthusiasm for exploring and integrating emerging technologies into projects.</li>
              <li>Experience in coaching and mentoring other developers.Experience in coaching and mentoring other developers.</li>
              <li>Ability to oversee and drive project progression.</li>
            </ul>
          </details>
        </div>
        <hr />
        <div><p style={{color: openDetails.openDetails2 ? "green" : "black"}}>Devops Engineer</p>
          <details open={openDetails.openDetails2} onClick={() => toggleDetails("openDetails2")}>
          <summary className='Careerdeatils'></summary>
          <h5>Location : Mumbai</h5>
          <h5>Job positions: 2</h5>
          <h5>Job Description:</h5>
          <p className='CareerContainertwo'>As a DevOps Engineer at UNITRES, you will be instrumental in optimizing our development
          and operational workflows, leveraging the capabilities of both AWS and GCP cloud platforms. You will collaborate closely with
          cross-functional teams to architect, deploy, and manage scalable, highly available infrastructure and applications.
          Your responsibilities will include designing and implementing automated CI/CD pipelines, managing infrastructure as code,
          and ensuring the reliability and performance of our systems. You will play a key role in monitoring, logging, and optimizing
          cloud resources to maintain optimal cost efficiency and scalability. Additionally, you will contribute to the adoption of
          best practices in security, compliance, and disaster recovery across both AWS and GCP environments.</p>
            <h5>Candidate Requirements:</h5>
            <ul className='CareerContainertwo'>
              <li>Proficiency in AWS and GCP cloud platforms, including services such as AWS S3, Redshift, Glue, Athena, GCP Storage, BigQuery, Dataflow, and others.</li>
              <li>Hands-on experience in designing, building, and optimizing data pipelines using tools like Apache Spark, Apache Beam, AWS Glue, GCP Dataflow, or similar technologies.</li>
              <li>Strong understanding of data modeling concepts and experience in designing and implementing data schemas, data lakes, and data warehouses on AWS and GCP.</li>
              <li>Proficiency in SQL and experience in writing complex queries, transformations, and aggregations for data processing and analytics purposes.</li>
              <li>Familiarity with big data technologies such as Hadoop, Hive, Presto, or Spark for large-scale data processing and analytics.</li>
              <li>Experience in data governance, data lineage, and metadata management practices to ensure data quality, consistency, and compliance.</li>
              <li>Knowledge of data security best practices and experience in implementing data encryption, access controls, and audit logging in AWS and GCP environments.</li>
              <li>Strong programming skills in languages such as Python, Java, or Scala for data manipulation, transformation, and automation tasks.</li>
              <li>Experience with data visualization tools such as Tableau, Power BI, or Google Data Studio for creating interactive dashboards and reports.</li>
              <li>Effective communication skills and ability to collaborate with cross-functional teams to understand requirements, gather feedback, and deliver data solutions that meet business needs.</li>
              <li>Continuous learning mindset with the willingness to stay updated with the latest trends and technologies in data engineering, cloud computing, and analytics.</li>
              <li>Previous experience with multi-cloud environments and certifications in AWS and/or GCP are highly desirable but not required.</li>
            </ul>
          </details>
        </div>
        <hr />
        <div><p style={{color: openDetails.openDetails3 ? "green" : "black"}}>Data Engineer</p>
          <details open={openDetails.openDetails3} onClick={() => toggleDetails("openDetails3")}>
          <summary className='Careerdeatils'></summary>
          <h5>Location : Mumbai</h5>
          <h5>Job positions: 2</h5>
          <h5>Job Description:</h5>
          <p className='CareerContainertwo'>As a Data Engineer at UNITRES, you will be at the forefront of architecting and
          implementing data solutions leveraging the capabilities of both AWS and GCP cloud platforms. You will collaborate closely
          with data scientists, analysts, and other stakeholders to design, build, and maintain scalable data pipelines, data
          warehouses, and analytics systems. Your role will involve extracting, transforming, and loading (ETL) data from various
          sources, ensuring data quality, and optimizing performance for analytics and reporting. You will be responsible for designing
          and implementing data models, schemas, and storage solutions that meet the needs of our growing data ecosystem. Additionally,
          you will play a key role in implementing data security, privacy, and compliance measures across both AWS and GCP environments.</p>
            <h5>Candidate Requirements:</h5>
            <ul className='CareerContainertwo'>
              <li>Proficiency in AWS and GCP cloud platforms, including services such as AWS S3, Redshift, Glue, Athena, GCP Storage, BigQuery, Dataflow, and others.</li>
              <li>Hands-on experience in designing, building, and optimizing data pipelines using tools like Apache Spark, Apache Beam, AWS Glue, GCP Dataflow, or similar technologies.</li>
              <li>Strong understanding of data modeling concepts and experience in designing and implementing data schemas, data lakes, and data warehouses on AWS and GCP.</li>
              <li>Proficiency in SQL and experience in writing complex queries, transformations, and aggregations for data processing and analytics purposes.</li>
              <li>Familiarity with big data technologies such as Hadoop, Hive, Presto, or Spark for large-scale data processing and analytics.</li>
              <li>Experience in data governance, data lineage, and metadata management practices to ensure data quality, consistency, and compliance.</li>
              <li>Knowledge of data security best practices and experience in implementing data encryption, access controls, and audit logging in AWS and GCP environments.</li>
              <li>Strong programming skills in languages such as Python, Java, or Scala for data manipulation, transformation, and automation tasks.</li>
              <li>Experience with data visualization tools such as Tableau, Power BI, or Google Data Studio for creating interactive dashboards and reports.</li>
              <li>Effective communication skills and ability to collaborate with cross-functional teams to understand requirements, gather feedback, and deliver data solutions that meet business needs.</li>
              <li>Continuous learning mindset with the willingness to stay updated with the latest trends and technologies in data engineering, cloud computing, and analytics.</li>
              <li>Previous experience with multi-cloud environments and certifications in AWS and/or GCP are highly desirable but not required.</li>
            </ul>
          </details>
        </div>
        <hr />
        <div><p style={{color: openDetails.openDetails4 ? "green" : "black"}}>Data Architect</p>
          <details open={openDetails.openDetails4} onClick={() => toggleDetails("openDetails4")}>
          <summary className='Careerdeatils'></summary>
          <h5>Location : Mumbai</h5>
          <h5>Job positions: 1</h5>
          <h5>Job Description:</h5>
          <p className='CareerContainertwo'>As a Data Architect at UNITRES, you will be responsible for designing and implementing
          robust data architectures leveraging the capabilities of both AWS and GCP cloud platforms. You will collaborate closely with
          stakeholders, including data engineers, data scientists, and business analysts, to understand data requirements and design
          scalable and efficient solutions to meet business needs. Your role will involve defining data models, schemas, and storage
          structures, as well as selecting appropriate data storage and processing technologies on AWS and GCP. You will be responsible
          for ensuring data integrity, security, and compliance across the entire data lifecycle, from ingestion to consumption.
          Additionally, you will play a key role in optimizing data workflows, performance tuning, and implementing best practices for
          data governance and management.</p>
            <h5>Candidate Requirements:</h5>
            <ul className='CareerContainertwo'>
              <li>Proficiency in AWS and GCP cloud platforms, including services such as AWS S3, Redshift, Glue, Athena, GCP Storage, BigQuery, Dataflow, and others.</li>
              <li>Extensive experience in designing and implementing data architectures, data models, and data pipelines for large-scale enterprise environments.</li>
              <li>Strong understanding of data warehousing concepts, including dimensional modeling, data normalization, and star schema design.</li>
              <li>Hands-on experience with ETL/ELT processes, data integration techniques, and data transformation tools such as Apache Spark, Apache Beam, AWS Glue, GCP Dataflow, or similar technologies.</li>
              <li>Knowledge of big data technologies and frameworks such as Hadoop, Hive, Presto, or Spark for processing and analyzing large volumes of data.</li>
              <li>Expertise in data governance, data lineage, metadata management, and data quality assurance practices to ensure data consistency, accuracy, and compliance.</li>
              <li>Proficiency in SQL and experience in writing complex queries, optimizations, and performance tuning for data processing and analytics purposes.</li>
              <li>Experience in implementing data security controls, encryption, access controls, and audit logging in AWS and GCP environments.</li>
              <li>Strong programming skills in languages such as Python, Java, or Scala for data manipulation, automation, and orchestration tasks.</li>
              <li>Excellent communication and stakeholder management skills, with the ability to collaborate effectively with cross-functional teams and translate business requirements into technical solutions.</li>
              <li>Previous experience with multi-cloud environments and certifications in AWS and/or GCP are highly desirable but not required.</li>            
            </ul>
          </details>
        </div>
        <hr />
        <div><p style={{color: openDetails.openDetails5 ? "green" : "black"}}>Enterprise Application Architect</p>
          <details open={openDetails.openDetails5} onClick={() => toggleDetails("openDetails5")}>
          <summary className='Careerdeatils'></summary>
          <h5>Location : Mumbai</h5>
          <h5>Job positions: 1</h5>
          <h5>Job Description:</h5>
          <p className='CareerContainertwo'>As an Enterprise Application Architect at UNITRES, you will lead the design and
          implementation of scalable, secure, and reliable enterprise-level applications. You will work closely with stakeholders
          across various departments to understand business requirements, define application architecture strategies, and ensure
          alignment with organizational goals. Your role will involve assessing existing systems, identifying opportunities for
          improvement, and defining standards and best practices for application development and integration. You will collaborate
          with development teams to architect solutions that leverage modern technologies, cloud platforms, and microservices
          architectures. Additionally, you will provide technical guidance and mentorship to ensure the successful delivery of
          high-quality applications that meet performance, scalability, and security requirements.</p>
            <h5>Candidate Requirements:</h5>
            <ul className='CareerContainertwo'>
              <li>Proven experience as an enterprise application architect, with a track record of designing and implementing complex, mission-critical applications.</li>
              <li>Deep understanding of application architecture principles, including scalability, reliability, performance, and security considerations.</li>
              <li>Extensive experience in assessing business requirements, defining application architecture strategies, and translating them into technical solutions.</li>
              <li>Strong expertise in designing and implementing distributed systems, microservices architectures, and API-driven integration patterns.</li>
              <li>Proficiency in modern development technologies and frameworks such as Java, .NET, Spring Boot, Node.js, React, Angular, or similar.</li>
              <li>Knowledge of cloud platforms such as AWS, Azure, or Google Cloud Platform, including experience in architecting and deploying applications in cloud environments.Aesthetic sensibility for layout design.</li>
              <li>Familiarity with containerization technologies such as Docker and container orchestration platforms like Kubernetes.</li>
              <li>Experience with database technologies such as SQL, NoSQL, and data caching solutions</li>
              <li>Strong understanding of security best practices and compliance standards in application development and integration.</li>
              <li>Excellent communication and stakeholder management skills, with the ability to collaborate effectively with business leaders, development teams, and other stakeholders.</li>
              <li>Leadership skills with the ability to provide technical guidance, mentorship, and coaching to development teams.</li>
              <li>Continuous learning mindset with the willingness to stay updated with the latest trends and technologies in enterprise application architecture.</li>
              <li>Bachelor's or master's degree in computer science, engineering, or a related field is preferred. Relevant certifications such as TOGAF or AWS Certified Solutions Architect are a plus.</li>
            </ul>
          </details>
        </div>
        <hr />
      </div>
    </div>
  )
}
