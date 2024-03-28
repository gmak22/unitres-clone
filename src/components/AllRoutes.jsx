import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homepage } from '../pages/Homepage'
import About from '../pages/About'
import { Careers } from '../pages/Careers'
import InteAuto from '../pages/Services/InteAuto'
import Application from "../pages/Services/Application";
import DataEng from "../pages/Services/DataEng";
import Cloud from "../pages/Services/Cloud";
// import ScrollToTop from './ScrollToTop'

export const AllRoutes = () => {
    return (
        <Routes>
            {/* <ScrollToTop /> */}
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/career' element={<Careers />}></Route>
            <Route path='/service/application_modernization' element={<Application />}></Route>
            <Route path='/service/Cloud_Engineering' element={<Cloud />}></Route>
            <Route path='/service/Data_Engineering_&_Analytics' element={<DataEng />}></Route>
            <Route path='/service/Intelligent_Automation' element={<InteAuto />}></Route>
        </Routes>
    )
}
