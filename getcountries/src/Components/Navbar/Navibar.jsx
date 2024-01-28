import React from 'react'
import {Link} from "react-router-dom"

export default function Navibar() {

  return (
    <div style={{display:"flex" , justifyContent:"center", gap:"20px" }} >
        <Link to="/" > <h1>Home</h1>  </Link>
        <Link to="/about" > <h1>About</h1> </Link>
        <Link to="login" ><h1>Login</h1></Link>
        <Link to="/signup" ><h1>Signup</h1></Link>
    </div>
  )
}
