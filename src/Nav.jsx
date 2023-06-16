import React from 'react'
import Home from './components/Home'
import Service from './components/Service'
import Portfolio from './components/Portfolio'
import Community from './components/Community'
import Blog from './components/Blog'
import Signup from './components/Signup'
import Login from './components/Login'
import './App.css'

function Nav() {
    return (
        <div className="navbar">
      <div className="logo">Logo</div>
      <ul className="menu">
        <li>Home</li>
        <li>Service</li>
        <li>Community</li>
        <li>Portfolio</li>
        <li>Blog</li>
      </ul>
      <ul className='menu1'>
       <button>Sign up</button>
       <button>Sign In</button>
      </ul>
    </div>
    )
}

export default Nav