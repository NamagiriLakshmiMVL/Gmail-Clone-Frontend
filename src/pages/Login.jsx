import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { API } from '../API'



function Login(){
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target);
        const email = data.get("email")
        const password = data.get("password")

        const result = {
            email: email,
            password: password
        }

        axios.post(`${API}/creating-user/login`, result)
            .then((res) => {
                console.log(res.data)
                navigate("/gmail")
            
            })
            .catch((err)=>console.log(err))


       
    }

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
