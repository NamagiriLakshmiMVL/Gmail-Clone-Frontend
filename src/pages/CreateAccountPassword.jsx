import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useSelector } from 'react-redux';

function CreateAccountGmail() {
    const navigate = useNavigate()
    const [password, setPassword] = useState("")

    const user = useSelector((state) => state.userSlice.userDetails)
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("User", user)
        const result = {
            ...user,
            password: password
        }
        axios.post("https://backend-jz6x.onrender.com/creating-user/password", result)
            .then((res) => {
                navigate("/gmail")
                console.log(res.data)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Google</h1>
                <h2>Create a Gmail Password</h2>
                <h4>Enter your password</h4>
                <TextField label="Create a Gmail Password" name='password' onChange={(e) => setPassword(e.target.value)} />
                <br /><br />


                <Button variant="contained" type='submit'  >Next</Button>
            </form>
            <br />
            {/* <Button variant="contained" onClick={() => handleGmail()} >Create Gmail</Button> */}
        </div>
    )
}

export default CreateAccountGmail
