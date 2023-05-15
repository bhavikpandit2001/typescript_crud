import { Button } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../redux/Auth/authSlice'

const Footer = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onLogout = () =>{
        dispatch(logout())
        navigate("/login")
    }
  return (
    <div style={{backgroundColor: "black", color: "white",  }}>
        <div style={{padding: "0px 10px",display: "flex", justifyContent: "space-between"}}>
            <div>
                <h2 style={{color: "white", fontSize: "40px"}}>LOGO</h2>
            </div>
            <div style={{display: "flex", alignItems:"center" }}>
                <div style={{width: "100px"}}>
                    <Button type='primary' onClick={onLogout}>Logout</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer