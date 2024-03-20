import React from 'react'
import './styles/Homepage.css'
import { OurServices } from '../components/OurServices'
import { HomeCategory } from '../components/HomeCategory'
import approach from './photos/approach.png'
import { OurIndustries } from '../components/OurIndustries'

export const Homepage = () => {
  return (
    <div>
      <OurServices />
      <HomeCategory />
      <div className='approach'>
        <p>Unitres Approach</p>
        <img src={approach} alt="Unitrestech Approach" />
      </div>
      <OurIndustries />
    </div >
  )
}
