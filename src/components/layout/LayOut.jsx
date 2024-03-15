import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../common/navbar/Navbar'
import Footer from '../common/footer/Footer'

const LayOut = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default LayOut