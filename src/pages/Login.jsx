import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { API } from '../API'
import { useDispatch } from 'react-redux'

import { login_user } from '../redux/loginSlice'


function Login() {
    const [sample, setSample] = useState([])
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async(e) => {
        e.preventDefault()
        const data = new FormData(e.target);
      
        const email = data.get("email")
        setEmail(email)
       
        const password = data.get("password")
        setPassword(password)
       
        const result = {
            email: email,
            password: password
        }
        localStorage.setItem("email", JSON.stringify(email))
        
        
        axios.post(`${API}/creating-user/login`, result)
            .then((res) => {
                setSample(res.data)
            })
            .catch((err) => console.log(err))

    }
    ((sample.email === email) && (sample.password === password)) ? navigate("/gmail/display-msg") : navigate("/gmail/display-msg")
    dispatch(login_user(sample))

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Google</h1>
                <h2>Sign in to Google Account</h2>

                <TextField label="email" name='email' placeholder="john@gmail.com" />
                <br /><br />
                <TextField label="password" variant="outlined" name='password' placeholder="john@123" />
                <br /><br />
                <Button variant="contained" type='submit' >Next</Button>
            </form>

        </div>
    )
}

export default Login
