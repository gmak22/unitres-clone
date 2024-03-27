import React, { useEffect, useState } from 'react'
import '../Styles/HomepageSlider.css'
import slide1 from '../images/slide-1.png'
import slide2 from '../images/slide-2.png'
import slide3 from '../images/slide-3.png'
import slide4 from '../images/slide-4.png'
import slide5 from '../images/slide-5.png'

export const HomepageSlider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderDivs = [
        <div key={1}>
            <img src={slide1} alt='Cloud Engineering & Native Development' />
            <div className='homepage-slider1-overlay'>
                <p className='homepage-slider-heading'>Driving Technology Driven Intelligent Outcomes</p>
                <p className='homepage-slider1-description'>DIGITAL | CLOUD | AI | AUTOMATION</p>
                <p className='homepage-slider-bottom'>FIRST</p>
            </div>
        </div>,

        <div key={2}>
            <img src={slide2} alt='Cloud Engineering & Native Development' />
            <div className='homepage-slider-overlay'>
                <p className='homepage-slider-heading'>Cloud Engineering & Native Development</p>
                <p className='homepage-slider-description'>Faster feature releases along tight budgets and stringent timelines Faster feature
                    releases along tight budgets and stringent timelinesFaster feature releases along
                    tight budgets and stringent timelines</p>
            </div>
        </div>,

        <div key={3}>
            <img src={slide3} alt='Solving For Application Modernization' />
            <div className='homepage-slider-overlay'>
                <p className='homepage-slider-heading'>Solving For Application Modernization</p>
                <p className='homepage-slider-description'>Faster feature releases along tight budgets and stringent timelines Faster feature
                    releases along tight budgets and stringent timelinesFaster feature releases along
                    tight budgets and stringent timelines</p>
            </div>
        </div>,

        <div key={4}>
            <img src={slide4} alt='Data Engineering and Analytics' />
            <div className='homepage-slider-overlay'>
                <p className='homepage-slider-heading'>Data Engineering and Analytics</p>
                <p className='homepage-slider-description'>Faster feature releases along tight budgets and stringent timelines Faster feature
                    releases along tight budgets and stringent timelinesFaster feature releases along
                    tight budgets and stringent timelines</p>
            </div>
        </div>,

        <div key={5}>
            <img src={slide5} alt='Intelligent Automation Services' />
            <div className='homepage-slider-overlay'>
                <p className='homepage-slider-heading'>Intelligent Automation Services</p>
                <p className='homepage-slider-description'>Faster feature releases along tight budgets and stringent timelines Faster feature
                    releases along tight budgets and stringent timelinesFaster feature releases along
                    tight budgets and stringent timelines</p>
            </div>
        </div>,
    ]

    useEffect(() => {
        const intervalId = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderDivs.length);
        }, 2000)
        // return () => clearInterval(intervalId);
    },[]);

    return (
        <div className='homepage-slider-container'>
            {sliderDivs[currentIndex]}
        </div>
    )
}
