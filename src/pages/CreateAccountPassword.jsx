import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useSelector } from 'react-redux';
import { API } from '../API';

function CreateAccountGmail() {
    const navigate = useNavigate()
    const [password, setPassword] = useState("")

    const user = useSelector((state) => state.userSlice.userDetails)
    const handleSubmit = (e) => {
        e.preventDefault()
        const result = {
            ...user,
            password: password
        }
        console.log(result)
        axios.post(`${API}/creating-user/password`, result)
            .then((res) => {
                { res.data === "Created User Successfully" ? navigate("/gmail/display-msg") : alert(res.data) }

            })
            .catch((err) => console.log(err))
    }

    return (
        <div className='creating-account'>
            <form id= "password" onSubmit={(e) => handleSubmit(e)}>
                <h1>Google</h1>
                <h2>Create a Gmail Password</h2>
                <h4>Enter your password</h4>
                <TextField label="Create a Gmail Password" id="pass" name='password' onChange={(e) => setPassword(e.target.value)} />
                <br /><br />
                <Button variant="contained" type='submit'  >Next</Button>
            </form>
            <br />
        </div>
    )
}

export default CreateAccountGmail
