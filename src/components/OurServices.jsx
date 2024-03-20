import React from 'react'
import service1 from './photos/service1.png'
import service2 from './photos/service2.png'
import service3 from './photos/service3.png'
import service4 from './photos/service4.png'
import './styles/OurServices.css'

export const OurServices = () => {
    return (
        <div>
            <p>OUR SERVICES</p>
            <div className='service-container'>
                <div className='service-div'>
                    <div className='service-left'>
                        <p className='service-number'>01</p>
                        <p className='service-title'> Application Modernization</p>
                        <p className='service-description'>
                            We live in an era where everything is getting digitized at an aggressive rate and companies need to catch up with this speed. One of the ways to achieve this is through Application Modernization, the process of updating legacy applications to modern solutions. A collaboration with us can help businesses activate faster feature releases under stringent timelines and affordable budgets
                        </p>
                    </div>
                    <div className='service-right'>
                        <img src={service1} alt='Service 1' />
                    </div>
                </div>

                <div className='service-div'>
                    <div className='service-left'>
                        <p>02</p>
                        <p>Cloud Engineering</p>
                        <p>
                            We live in an era where everything is getting digitized at an aggressive rate and companies need to catch up with this speed. One of the ways to achieve this is through Application Modernization, the process of updating legacy applications to modern solutions. A collaboration with us can help businesses activate faster feature releases under stringent timelines and affordable budgets
                        </p>
                    </div>
                    <div className='service-right'>
                        <img src={service2} alt='Service 2' />
                    </div>
                </div>

                <div className='service-div'>
                    <div className='service-left'>
                        <p>03</p>
                        <p>Intelligent Automation</p>
                        <p>
                            We live in an era where everything is getting digitized at an aggressive rate and companies need to catch up with this speed. One of the ways to achieve this is through Application Modernization, the process of updating legacy applications to modern solutions. A collaboration with us can help businesses activate faster feature releases under stringent timelines and affordable budgets
                        </p>
                    </div>
                    <div className='service-right'>
                        <img src={service3} alt='Service 3' />
                    </div>
                </div>

                <div className='service-div'>
                    <div className='service-left'>
                        <p>04</p>
                        <p>Data Analytics & Engineering</p>
                        <p>
                            We live in an era where everything is getting digitized at an aggressive rate and companies need to catch up with this speed. One of the ways to achieve this is through Application Modernization, the process of updating legacy applications to modern solutions. A collaboration with us can help businesses activate faster feature releases under stringent timelines and affordable budgets
                        </p>
                    </div>
                    <div className='service-right'>
                        <img src={service4} alt='Service 4' />
                    </div>
                </div>
            </div>
        </div>
    )
}
