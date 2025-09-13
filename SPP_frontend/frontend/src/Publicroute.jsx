import React from 'react'
import { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router-dom'

const Publicroute = ({children}) => {
  const {isLoggedIn} = useContext(AuthContext)
  return !isLoggedIn ? (
    children
  ) : (
    <Navigate to ='/dashboard' />
  )
}

export default Publicroute