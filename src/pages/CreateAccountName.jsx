import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { new_user } from '../redux/userSlice'


function CreateAccountName() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target);
        const firstname = data.get("firstname")
        const lastname = data.get("lastname")

        dispatch(new_user(["firstname", firstname]))
        dispatch(new_user(["lastname", lastname]))

        navigate("/creating-user/dob")

    }

    return (
        <div>
            <Box sx={{ textAlign: "center", marginTop: "60px" }}>
                <form id="name" onSubmit={(e) => handleSubmit(e)}>
                    <Typography sx={{ fontSize: { xs: "20px", sm: "30px", md: "35px" }, marginLeft: { xs: "50px", sm: "300px", md: "600px" } }}>Google</Typography>
                    <Typography sx={{ fontSize: { xs: "10px", sm: "15px", md: "20px" }, marginLeft: { xs: "50px", sm: "300px", md: "600px" } }}>Create a Google Account</Typography>
                    <Typography sx={{ fontSize: { xs: "10px", sm: "15px", md: "20px" }, marginLeft: { xs: "50px", sm: "300px", md: "600px" } }}>Enter your name</Typography>
                    <TextField sx={{ marginTop: "20px", marginLeft: { xs: "50px", sm: "300px", md: "600px" } }} label="First name" name='firstname' id='fname' />
                    <br /><br />
                    <TextField sx={{ marginTop: "20px", marginLeft: { xs: "50px", sm: "300px", md: "600px" } }} label="Last name" variant="outlined" name='lastname' id='lname' />
                    <br /><br />
                    <Box sx={{ display: "flex", justifyContent: "space-between", gap: "5px", marginLeft: { xs: "50px", sm: "300px", md: "600px" } }}>
                        <Button sx={{ marginTop: "10px", marginBottom: "20px" }} onClick={() => navigate("/")} variant="contained" type='submit'>Back</Button>
                        <Button sx={{ marginTop: "10px", marginBottom: "20px" }} variant="contained" type='submit' >Next</Button>
                    </Box>
                </form>
            </Box>
        </div>
    )

}



export default CreateAccountName




