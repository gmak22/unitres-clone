import React, { useState } from 'react'
import product from '../images/products_icon.png'
import design from '../images/design_icon.png'
import data from '../images/data_icon.png'
import engg from '../images/engg_icon.png'
import '../Styles/HomeCategory.css'

export const HomeCategory = () => {
    const [catStates, setCatStates] = useState({
        cat1: false,
        cat2: false,
        cat3: false,
        cat4: false
    })

    const handleToggle = (cat) => {
        setCatStates(prevState => ({
            ...prevState, [cat]: !prevState[cat]
        }));
    }

    return (
        <div className='category-model'>
            <div className='category-container-main'>
                <div className='category-heading'>
                    <p>Operating Model in the Digital Realm for Enterprises Prioritizing AI</p>
                    <p>The technology landscape is rapidly changing, tempting businesses with new capabilities for digital transformation. However, many struggle with multi-year journeys and solutions that meet IT parameters but not business expectations. We've identified four hurdles: customer-centricity, sustainable innovation, data utilization, and agility. To help, we've redesigned our approach around five pillars: product-centric value, human-centered design, data-first strategy, engineering excellence, and AI-powered talent development.</p>
                </div>

                <div className='home-category'>
                    <div className='category-container'>
                        <div className='category-title'>
                            <button className='title'>Product +</button>
                            <img src={product} alt='product-icon' />
                        </div>

                        <div className='category-description'>
                            <p>
                                Businesses are transitioning towards a customer-focused and product-oriented operational framework, supported by a platform ecosystem.<span id='dots' style={{ display: catStates.cat1 ? 'none' : 'inline' }}>...</span><span id='more' style={{ display: catStates.cat1 ? 'inline' : 'none' }}> In this context, a product encompasses services, capabilities, or experiences that generate value. Unitres Product Centric Value Delivery facilitates a smooth transition for clients from project-based to product-driven, platform-centric delivery, leveraging industry-specific blueprints, product objectives, and Key Results areas. This approach enables enterprises to align their teams with the continuous flow of business value using the OKR methodology. The tracking of value flow is facilitated through 'live engineering,' utilizing AI to analyze data within the tooling ecosystem.</span>
                            </p>
                        </div>
                        <button className='read-more-btn' onClick={() => handleToggle('cat1')}>{catStates.cat1 ? 'Read Less' : 'Read More'}</button>
                    </div>

                    <div className='category-container'>
                        <div className='category-title'>
                            <button className='title'>Design +</button>
                            <img src={design} alt='design-icon' />
                        </div>

                        <div className='category-description'>
                            <p>
                                Creating a digital encounter requires aligning with the dynamic expectations of individuals, offering on-demand, user-friendly, intelligent, and customized services.<span id='dots' style={{ display: catStates.cat2 ? 'none' : 'inline' }}>...</span><span id='more' style={{ display: catStates.cat2 ? 'inline' : 'none' }}> Leveraging our acclaimed expertise in human-centric experience design and immersive digital studios, we collaborate to incubate novel experiences and products. This empowers our clients to craft groundbreaking products and services, surpassing customer expectations. The synergy is enhanced through machine-assisted design.</span>
                            </p>
                        </div>
                        <button className='read-more-btn' onClick={() => handleToggle('cat2')}>{catStates.cat2 ? 'Read Less' : 'Read More'}</button>
                    </div>

                    <div className='category-container'>
                        <div className='category-title'>
                            <button className='title'>Data +</button>
                            <img src={data} alt='data-icon' />
                        </div>

                        <div className='category-description'>
                            <p>
                                Taking a data-centric approach involves consolidating crucial organizational data and knowledge in a digestible format, empowering systems to attain intelligence, facilitating agile<span id='dots' style={{ display: catStates.cat3 ? 'none' : 'inline' }}>...</span><span id='more' style={{ display: catStates.cat3 ? 'inline' : 'none' }}> and swift decision-making processes, and ensuring relevance for customers. Establishing a dynamic data foundation allows the utilization of trustworthy data, constructs interconnected data ecosystems, enforces robust data governance practices, and serves as the foundation for implementing large-scale AI-enabled products and services. In the journey towards building a data-centric organization, Unitres is well-equipped to craft a suite of AI-centric services, solutions, and platforms, leveraging both traditional and generative AI technologies.</span>
                            </p>
                        </div>
                        <button className='read-more-btn' onClick={() => handleToggle('cat3')}>{catStates.cat3 ? 'Read Less' : 'Read More'}</button>
                    </div>

                    <div className='category-container'>
                        <div className='category-title'>
                            <button className='title'>Engineering +</button>
                            <img src={engg} alt='engineering-icon' />
                        </div>

                        <div className='category-description'>
                            <p>
                                We employ a digital, cloud, and AI-centric architecture that embraces an evolutionary approach, allowing us to readily adopt and integrate the swift technological innovations in this domain.<span id='dots' style={{ display: catStates.cat4 ? 'none' : 'inline' }}>...</span><span id='more' style={{ display: catStates.cat4 ? 'inline' : 'none' }}> This prioritized architectural strategy is enhanced by a robust engineering ecosystem aimed at optimizing developer experience. Utilizing automation-focused platforms and tools, coupled with advanced engineering practices, we ensure high velocity and strive for engineering excellence in collaboration with our clients.</span>
                            </p>
                        </div>
                        <button className='read-more-btn' onClick={() => handleToggle('cat4')}>{catStates.cat4 ? 'Read Less' : 'Read More'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
