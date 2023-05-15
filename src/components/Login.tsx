import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, logout } from '../redux/Auth/authSlice';
import { RootState } from '../redux/store';
import { FormValues } from '../types/Types';
import "./login.css"

export default function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)

    const onSubmit = (data: FormValues) => {
        console.log(data)
        axios.post("https://dummyjson.com/auth/login", data)
            .then(res => {
                console.log(res.data)
                dispatch(login(res.data))
                navigate("/")
            }).catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        let data = localStorage.getItem("user-token")
         data ? dispatch(login(data)) : dispatch(logout())
        if(!isLoggedIn){
            dispatch(logout())
            navigate("/login")
        }else{
            dispatch(login(data))
            navigate("/")
        }
},[])
return (
    <div className="login">
        <h1>Log in</h1>
        <Form onFinish={onSubmit}>
            <Form.Item label="username" name="username" rules={[{ required: true, message: 'Please enter valid username' }]}>
                <Input placeholder='enter your username' />
            </Form.Item>
            <Form.Item label="password" name="password" rules={[{ required: true, message: 'Please enter valid Password!' }]}>
                <Input.Password placeholder='enter your password' />
            </Form.Item>
            <Button style={{ width: "100%" }} type='primary' htmlType='submit'>login</Button>
        </Form>
    </div>
);
}
