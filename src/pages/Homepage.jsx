import React from 'react'
import '../Styles/Homepage.css'
import { OurServices } from '../components/OurServices'
import { HomeCategory } from '../components/HomeCategory'
import approach from '../images/approach.png'
import { OurIndustries } from '../components/OurIndustries'
import { TechStacks } from '../components/TechStacks'

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
      <TechStacks />
    </div >
  )
}
