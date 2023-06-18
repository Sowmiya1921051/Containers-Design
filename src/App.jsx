import React from 'react'
import Nav from './Nav'

import './App.css'
import Find from './components/Find'
import Our from './components/Our'
import Photo from './components/Photo'
import Community from './components/Community'
import Blog from './components/Blog'
import Ourblogs from './components/Ourblogs'
import Realwedding from './components/Realwedding'
import BestOffers from './components/BestOffers'
import Testimonials from './components/Testimonials'
import Awards from './components/Awards'
import Oursuccess from './components/Oursuccess'
import Photography from './components/Photography'
function App() {
  return (
    <div>
    <Nav/>
    <Photo/>
    <Find/>
    <Our/>
    <Community/>
    <Blog/>
    <Ourblogs/>
    <Realwedding/>
    <BestOffers/>
    <Testimonials/>
    <Awards/>
    <Oursuccess/>
    <Photography/>
    </div>
  )
}

export default App