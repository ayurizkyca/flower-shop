import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../constant/routeConstant'
import LandingPage from '../pages/LandingPage'
import CategoryPage from '../pages/CategoryPage'
import AboutPage from '../pages/AboutPage'

const RoutesConfig:React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.ROOT} element={<LandingPage/>}/>
        <Route path={ROUTES.CATEGORY} element={<CategoryPage/>}/>
        <Route path={ROUTES.ABOUT} element={<AboutPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesConfig
