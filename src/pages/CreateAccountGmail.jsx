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
        const gmail = data.get("gmail")
        const newUserGmail = {
            gmail
        }
        localStorage.setItem("user_details", JSON.stringify(newUserGmail))

        dispatch(new_user(["email", gmail]))
        navigate("/creating-user/password")
    }

    return (
        <div className='creating-account'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Google</h1>
                <h2>Create a Gmail Address</h2>
                <h4>Enter your Gmail</h4>
                <TextField label="Create a Gmail Address" name='gmail' />
                <br /><br />
                <Button style={{ marginBottom: "20px" }} variant="contained" type='submit' >Next</Button>
            </form>
        </div>
    )
}

export default CreateAccountGmail
