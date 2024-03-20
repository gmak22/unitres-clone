import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homepage } from '../pages/Homepage'
import { About } from '../pages/About'
import { Careers } from '../pages/Careers'
import Application from '../pages/Services/Application'
import InteAuto from '../pages/Services/InteAuto'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/career' element={<Careers />}></Route>
            <Route path='/service/application' element={<InteAuto />}></Route>
        </Routes>
    )
}
