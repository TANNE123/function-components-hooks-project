import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomeComponents from './HomeComponents'
import AboutComponent from './AboutComponent'
import LoginComponent from './LoginComponent'

const NavigationComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeComponents/>}></Route>
          <Route path='/about' element={<AboutComponent/>}></Route>
          <Route path='/Login'element={<LoginComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default NavigationComponent


