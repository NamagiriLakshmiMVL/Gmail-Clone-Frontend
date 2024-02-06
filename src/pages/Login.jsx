import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"



function Login() {
    const [login, setLogin] = useState({})
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target);
        const username = data.get("username")
        const password = data.get("password")

        const result = {
            username:username,
            password:password
        }
        

        navigate("/creating-user/dob")
        console.log(login)
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
