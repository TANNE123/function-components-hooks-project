import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from './AllProducts'
import ProductComponent from './ProductComponent'
import MensComponent from './MensComponent'
import JeweleryComponents from './JeweleryComponents'
import ElectronicsComponents from './ElectronicsComponents'
import WomenComponents from './womenComponents'
import EmptyComponents from './EmptyComponents'

const NavigationComponents = () => {
  return (
   
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<AllProducts/>}></Route>
        <Route path='/product' element={<ProductComponent/>}>
            <Route path='mens' element={<MensComponent/>}></Route>
            <Route path='jewelery' element={<JeweleryComponents/>}/>
            <Route path='electronics' element={<ElectronicsComponents/>}/>
            <Route path='women' element={<WomenComponents/>}/>
            {/* <React path="product/:id" element={<EmptyComponents/>}/> */}
            
        </Route>
        <Route path='/:id' element={<EmptyComponents/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default NavigationComponents
