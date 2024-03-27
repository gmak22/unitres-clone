import React from 'react'
import '../Styles/Homepage.css'
import { OurServices } from '../components/OurServices'
import { HomeCategory } from '../components/HomeCategory'
import approach from '../images/approach.png'
import { OurIndustries } from '../components/OurIndustries'
import { TechStacks } from '../components/TechStacks'
import { HomepageSlider } from '../components/HomepageSlider'
import { Animation } from '../components/Animation'

export const Homepage = () => {
  return (
    <div>
      <HomepageSlider />
      <OurServices />
      <HomeCategory />
      <div className='approach'>
        <p>Unitres Approach</p>
        <img src={approach} alt="Unitrestech Approach" />
      </div>
      <OurIndustries />
      <Animation />
      <TechStacks />

    </div >
  )
}
