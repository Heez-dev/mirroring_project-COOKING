import React from 'react'
import Nav from '../components/NavBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <Nav/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
