import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{backgroundColor: "#002750", color: "white", position: "sticky", zIndex:"1", top:"0" }}>
        <div style={{padding: "0px 10px",display: "flex", justifyContent: "space-between"}}>
            <div>
                <h2 style={{color: "white", fontSize: "35px"}}>LOGO</h2>
            </div>
            <div style={{display: "flex", alignItems:"center", textAlign: "center"}}>
                <div style={{width: "100px"}}>
                  <Link style={{color: "white", textDecoration: "none", fontSize: "20px"}} to='/'>User</Link>
                </div>
                <div style={{width: "100px"}}>
                  <Link style={{color: "white", textDecoration: "none", fontSize: "20px"}} to='/products'>Products</Link>
                </div>
                <div style={{width: "100px"}}>
                  <Link style={{color: "white", textDecoration: "none", fontSize: "20px"}} to='/cart'>Cart</Link>
                </div>
                <div style={{width: "100px"}}>
                  <Link style={{color: "white", textDecoration: "none", fontSize: "20px"}} to='/quotes'>Quotes</Link>
                </div>
                <div style={{width: "100px"}}>
                  <Link style={{color: "white", textDecoration: "none", fontSize: "20px"}} to='/posts'>Posts</Link>
                </div>
                <div style={{width: "100px"}}>
                  <Link style={{color: "white", textDecoration: "none", fontSize: "20px"}} to='/todos'>Todos</Link>
                </div>
                <div style={{width: "100px"}}>
                  <Link style={{color: "white", textDecoration: "none", fontSize: "20px"}} to='/login'>Login</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar