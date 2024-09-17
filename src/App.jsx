import React from 'react'
import NavBarComponents from './components/14-9-24task/navComponents/NavBarComponents'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RecipesComponent from './components/14-9-24task/screensComponents/RecipesComponent'
import MainComponent from './components/14-9-24task/screensComponents/MainComponent'

const App = () => {
  return (
   <>
   <NavBarComponents/>

<BrowserRouter>

<Routes>
<Route path='/' element={<RecipesComponent/>}/>
<Route path='/main' element={<MainComponent/>}/>
</Routes>
</BrowserRouter>

   </>
  )
}

export default App
