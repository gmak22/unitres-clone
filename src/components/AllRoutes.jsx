import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homepage } from '../pages/Homepage'
import { About } from '../pages/About'
import { Careers } from '../pages/Careers'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' Component={<Homepage />}></Route>
            <Route path='/about' Component={<About />}></Route>
            <Route path='/career' Component={<Careers />}></Route>
        </Routes>
    )
}
