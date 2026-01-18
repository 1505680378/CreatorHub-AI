import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import Dashboard from './Pages/Dashboard'
import BlogTitle from './Pages/BlogTitle'
import ImageGenerator from './Pages/ImageGenerator'
import Community from './Pages/Community'
import BackgroundRemove from './Pages/BackgroundRemove'
import ObjectRemoval from './Pages/ObjectRemoval'
import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react'
import {Toaster} from 'react-hot-toast'

const App = () => {

  
  const {getToken} = useAuth()
  useEffect(()=> {
    getToken().then((token)=>console.log(token))
  }, [])
  
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ai' element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='blog-title' element={<BlogTitle/>}/>
          <Route path='image-generator' element={<ImageGenerator/>}/>
          <Route path='community' element={<Community/>}/>
          <Route path='bg-remove' element={<BackgroundRemove/>}/>
          <Route path='remove-object' element={<ObjectRemoval/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
