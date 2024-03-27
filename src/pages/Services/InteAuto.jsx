import React, { useEffect } from 'react'
import Diagram from '../../components/Diagram'
import MySwiper from '../../components/Swiper'
import "../../Styles/Inteauto.css";


export default function InteAuto() {


  // useEffect(() => {
  //   // Initialize Swiper when the component mounts
  //   const mySwiper = new Swiper('.swiper-container', {
  //     // Swiper options...
  //   });


  //   // Clean up Swiper instance when the component unmounts
  //   return () => {
  //     mySwiper.destroy();
  //   };
  // }, []);


  const SliderData = [
    {
      img:`https://www.unitrestech.com/assets/images/image1.png`,
      no:`01`,
      title:`Customer Services`,
      desc:`We live in an era where everything is getting digitized 
      at an aggressive rate and companies need to catch up with this 
      speed. One of the ways to achieve this is through Application 
      Modernization, the process of updating legacy applications to 
      modern solutions. A collaboration with us can help businesses 
      activate faster feature releases under stringent timelines and 
      affordable budgets.`
    },
    {
      img:`https://www.unitrestech.com/assets/images/image2.png`,
      no:`02`,
      title:`Claims Handling`,
      desc:`We live in an era where everything is getting digitized 
      at an aggressive rate and companies need to catch up with this 
      speed. One of the ways to achieve this is through Application 
      Modernization, the process of updating legacy applications to 
      modern solutions. A collaboration with us can help businesses 
      activate faster feature releases under stringent timelines and 
      affordable budgets.`
    },
    {
      img:`https://www.unitrestech.com/assets/images/image3.png`,
      no:`03`,
      title:`Debt Collection `,
      desc:`We live in an era where everything is getting digitized 
      at an aggressive rate and companies need to catch up with this 
      speed. One of the ways to achieve this is through Application 
      Modernization, the process of updating legacy applications to 
      modern solutions. A collaboration with us can help businesses 
      activate faster feature releases under stringent timelines and 
      affordable budget`
    },
    {
      img:`https://www.unitrestech.com/assets/images/image4.png`,
      no:`04`,
      title:`Simplifai Archiver`,
      desc:`We live in an era where everything is getting digitized at 
      an aggressive rate and companies need to catch up with this speed. 
      One of the ways to achieve this is through Application Modernization, 
      the process of updating legacy applications to modern solutions. A 
      collaboration with us can help businesses activate faster feature 
      releases under stringent timelines and affordable budgets.`
    },
    {
      img:`https://www.unitrestech.com/assets/images/image5.png`,
      no:`05`,
      title:`Document Handling`,
      desc:`We live in an era where everything is getting digitized at 
      an aggressive rate and companies need to catch up with this speed. 
      One of the ways to achieve this is through Application Modernization, 
      the process of updating legacy applications to modern solutions. A 
      collaboration with us can help businesses activate faster feature releases 
      under stringent timelines and affordable budgets.`
    }
  ]

  return (
    <div>
        <div id='inteauto-part-1'>
          <img src="https://www.unitrestech.com/assets/images/banner2.png" alt="" />
          <h1>
          Unlock Efficiency With Intelligent Automation
          </h1>
          <p>
          Put automation to work for your digital business initiatives
          </p>
        </div>
        <div id='inteauto-part-2'>
          <div>
            <h1>
            Achieve quicker outcomes with a forward-thinking operational framework.
            </h1>
            <p>
            Integrate your enterprise's operations, workforce, and 
            valuable insights through the power of intelligent process 
            automation (IPA) to achieve remarkable efficiency improvements 
            while keeping costs in check.
            <br />
            <br />

            Collaborate with our knowledgeable professionals to create user-friendly 
            methods that fully leverage automation's potential. Together, we envision 
            new ways of operating that blend human expertise and digital capabilities 
            to expedite transformation and enable your business to anticipate future 
            developments.
            </p>
          </div>
          <div>
            <img src="https://www.unitrestech.com/assets/images/slide2.png" alt="" />
          </div>
        </div>
        <div id='inteauto-part-3'>
          <h1>
          Automation promises big gains, but only when applied properly
          </h1>
          <p>
          Integrate your enterprise's operations, workforce, and valuable insights through 
          the power of intelligent process automation (IPA) to achieve remarkable efficiency 
          improvements while keeping costs in check Collaborate with our knowledgeable professionals 
          to create user-friendly methods that fully leverage automation's potential. Together, 
          we envision new ways of operating that blend human expertise and digital capabilities to 
          expedite transformation and enable your business to anticipate future developments.
          </p>
        </div>
        <div id='inteauto-part-4'>
          <div id='part4-section1'>
            <h1>
            Benefits of intelligent automation
            </h1>
            <p>
            Integrate your enterprise's operations, workforce, and 
            valuable insights through the power of intelligent process 
            automation (IPA) to achieve remarkable efficiency improvements 
            while keeping costs in check.
            </p>
          </div>
          <div id='part4-section2'>
          <div>
              <div>
                <h1>
                Improving customer experience
                </h1>
                <img src="https://www.unitrestech.com/assets/images/icon1.png" alt="" />
              </div>
              <div>
                <p>
                Integrate your enterprise's operations, workforce, and valuable 
                insights through the power of intelligent process automation (IPA) to achieve
                </p>
              </div>
          </div>
          <div>
              <div>
                <h1>
                Higher productivity experience
                </h1>
                <img src="https://www.unitrestech.com/assets/images/icon2.png" alt="" />
              </div>
              <div>
                <p>
                Integrate your enterprise's operations, workforce, and valuable insights through 
                the power of intelligent process automation (IPA) to achieve
                </p>
              </div>
          </div>
          <div>
              <div>
                <h1>
                Increased performance experience
                </h1>
                <img src="https://www.unitrestech.com/assets/images/icon3.png" alt="" />
              </div>
              <div>
                <p>
                Integrate your enterprise's operations, workforce, and valuable insights through 
                the power of intelligent process automation (IPA) to achieve
                </p>
              </div>
          </div>
          <div>
              <div>
                <h1>
                Reduced operating costs
                </h1>
                <img src="https://www.unitrestech.com/assets/images/icon4.png" alt="" />
              </div>
              <div>
                <p>
                Integrate your enterprise's operations, workforce, and valuable 
                insights through the power of intelligent process automation (IPA) to achieve
                </p>
              </div>
          </div>
          </div>
        </div>
        <div id='inteauto-part-5'>
          <h1>Tehnological components of IA</h1>
          <div>
            <img src="https://www.unitrestech.com/assets/images/a4.png" alt="" />
            <div>
              <h3>Computer Vision ( OCR + ICR)</h3>
              <p>High-precision OCR engines for accurate text extraction from images, scanned documents, 
                and other sources along with support for multiple languages and document types------
              </p>

              <ul>
                <li>Document Capture and Processing</li>
                <li>OCR & ICR Technology</li>
                <li>Customized Solutions</li>
                <li>Machine Learning and Continuous Improvement</li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h3>Artificial Intelligence</h3>
              <p>
              Unitrestech can empower businesses to harness the full potential of AI within their operations, 
              drive innovation, and stay competitive in a rapidly evolving technological landscape Consulting Services
              </p>
              <ul>
              <li>AI Governance and Ethics</li>
              <li>Predictive Analytics</li>
              <li>AI Integration with Existing Systems</li>
              <li>Machine Learning Model Development</li>
              <li>Data Services</li>
              </ul>
            </div>
            <img src="https://www.unitrestech.com/assets/images/a3.png" alt="" />
          </div>
          <div>
            <img src="https://www.unitrestech.com/assets/images/a1.png" alt="" />
            <div>
              <h3>Robotic Process Automation</h3>
              <p>Automate repetitive processes across the enterprise, reducing manual tasks, 
                increasing speed, and removing human error.</p>
                <ul>
                  <li>Process Mining & Discovery</li>
                  <li>Business Process Automation</li>
                  <li>RPA Managed Services</li>
                </ul>
            </div>
          </div>
          <div>
            <div>
              <h3>
              Business Process Management
              </h3>
              <p>
              Transform your business with process mining and discovery to streamline processes, 
              cut costs, and enhance productivity.

              <ul>
                <li>Process Mining & Discovery</li>
                <li>Business Process Automation</li>
              </ul>
              </p>
            </div>
            <img src="https://www.unitrestech.com/assets/images/a2.png" alt="" />
          </div>
        </div>
        <div id='inteauto-part-6'>
          <div>
            <img src="https://www.unitrestech.com/assets/images/11.png" alt="" />
            <h3>Assist with innovation</h3>
          </div>
          <div>
            <img src="https://www.unitrestech.com/assets/images/12.png" alt="" />
            <h3>Saves Time</h3>
          </div>
          <div>
            <img src="https://www.unitrestech.com/assets/images/13.png" alt="" />
            <h3>Improves accuracy</h3>
          </div>
          <div>
            <img src="https://www.unitrestech.com/assets/images/14.png" alt="" />
            <h3>Enhances security</h3>
          </div>
          <div>
            <img src="https://www.unitrestech.com/assets/images/15.png" alt="" />
            <h3>Satisfies Customers</h3>
          </div>
        </div>
        <div id='inteauto-part-7'>
          <Diagram />
        </div>
        <div id='inteauto-part-8' >
          <h1>Industry Driven Use Cases</h1>
          <MySwiper SliderData={SliderData} color="#F3F7FF"/>
        </div>
      
    </div>
  )
}
