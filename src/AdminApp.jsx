import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './componenets/Navbar'

const AdminApp = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default AdminApp
