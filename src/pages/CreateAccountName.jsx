import { Button, TextField } from '@mui/material'
import React from 'react'
import {useNavigate} from "react-router-dom"
import {useDispatch } from 'react-redux'
import { new_user } from '../redux/userSlice'



 function CreateAccountName() {
 const navigate = useNavigate()
 const dispatch = useDispatch()
    const handleSubmit = (e) => {
            e.preventDefault()
            const data = new FormData(e.target);
            const firstname = data.get("firstname")
            const lastname = data.get("lastname")
           
            dispatch(new_user(["firstname",firstname]))
            dispatch(new_user(["lastname",lastname]))
            
            
          
            navigate("/creating-user/dob")
           
    }
    
    return (
        <div className='creating-account'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Google</h1>
                <h2>Create a Google Account</h2>
                <h4>Enter your name</h4>
                <TextField label="First name" name='firstname' />
                <br /><br />
                <TextField label="Last name(optional)" variant="outlined" name='lastname' />
                <br /><br />
                <Button variant="contained" type='submit' >Next</Button>
            </form>



        </div>
    )
}



export default CreateAccountName




