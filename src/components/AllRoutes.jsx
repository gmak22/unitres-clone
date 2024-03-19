import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homepage } from '../pages/Homepage'
import { About } from '../pages/About'
import { Careers } from '../pages/Careers'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/career' element={<Careers />}></Route>
        </Routes>
    )
}
