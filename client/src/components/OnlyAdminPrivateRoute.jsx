import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function OnlyAdminPrivateRoute() {
    const {currentUser} = useSelector((state) => state.user)
    console.log(currentUser);
  return (
    currentUser && currentUser.isAdmin ? <Outlet/> : <Navigate to='/sign-in'/>
  )
}
