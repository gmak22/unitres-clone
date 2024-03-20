import React from 'react'
import '../Styles/OurIndustries.css'
import ind1 from '../images/industry-1.png'
import ind2 from '../images/industry-2.png'
import ind3 from '../images/industry-3.png'
import ind4 from '../images/industry-4.png'
import ind5 from '../images/industry-5.png'
import ind6 from '../images/industry-6.png'

export const OurIndustries = () => {
    return (
        <div className='industries-model'>
            <p>OUR INDUSTRIES</p>
            <div className='industries-container'>
                <img src={ind1} alt='Financial Services' />
                <img src={ind2} alt='Retail' />
                <img src={ind3} alt='Healthcare' />
                <img src={ind4} alt='Logistic & Distribution' />
                <img src={ind5} alt='Media & Entertainment' />
                <img src={ind6} alt='Traveling & Hospitality' />
            </div>
        </div>
    )
}
