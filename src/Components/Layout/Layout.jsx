import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import FooterA from '../FooterA/FooterA'
import FooterB from '../FooterB/FooterB'

export default function Layout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <FooterA/>
        <FooterB/>

    </div>
  )
}
 