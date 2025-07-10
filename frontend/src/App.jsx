import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Main from './pages/Main'
import Detail from './pages/detail'
import Create from './pages/create'
import Header from './components/header'



const App = () => {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
 
  <Route path='/' element={<Main/>}/>
  <Route  path='/movie/:id' element={<Detail/>}/>
  <Route path='/create' element={<Create/>}/>

   </Routes>
   
   </BrowserRouter>
  )
}

export default App
