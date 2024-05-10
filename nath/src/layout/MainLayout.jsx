import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
        <Nav></Nav>
        <Outlet></Outlet>
        
    </div>
  )
}

export default MainLayout