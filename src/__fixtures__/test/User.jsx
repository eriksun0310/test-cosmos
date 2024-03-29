import React from 'react'
import { useSelector } from 'react-redux'
import NotLogin from './NotLogin'
import Login from './Login'
const User = () => {
    const state = useSelector(state=>state.user)
    const data = state.user
  return (
    <div>
      {
        data.login 
        ? <Login/>
        : <NotLogin/>
      }
    </div>
  )
}

export default User
