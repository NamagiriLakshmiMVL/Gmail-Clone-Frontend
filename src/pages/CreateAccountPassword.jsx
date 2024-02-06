import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { new_user } from '../redux/userSlice'



function CreateAccountGmail() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target);
        const password = data.get("password")

       
      
        dispatch(new_user(["password",password]))
        navigate("/gmail")

    }
   

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Google</h1>
                <h2>Create a Gmail Password</h2>
                <h4>Enter your password</h4>
                <TextField label="Create a Gmail Password" name='password' />
                <br /><br />


                <Button variant="contained" type='submit' >Next</Button>
            </form>
        </div>
    )
}

export default CreateAccountGmail
