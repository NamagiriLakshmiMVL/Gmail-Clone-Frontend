import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { API } from '../API'

function Login() {
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData(e.target);
        const email = data.get("email")
        const password = data.get("password")
        const result = {
            email,
            password
        }
        localStorage.setItem("email", JSON.stringify(email))

        await axios.post(`${API}/creating-user/login`, result)
            .then((res) => {
                { res.data === "Login Successfull" ? navigate("/gmail/display-msg") : alert(res.data) }
            })
            .catch((err) => alert(err))

    }

    return (
        <div className='creating-account'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Google</h1>
                <h2>Sign in to Google Account</h2>

                <TextField label="Email" name='email' placeholder="john@gmail.com" />
                <br /><br />
                <TextField label="Password" variant="outlined" name='password' placeholder="john@123" />
                <br /><br />
                <Button style={{marginBottom:"10px"}} variant="contained" type='submit' >Next</Button>
            </form>

        </div>
    )
}

export default Login
