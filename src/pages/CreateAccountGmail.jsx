import { Button, Box, TextField, Typography } from '@mui/material'
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
        
        localStorage.setItem("email", JSON.stringify(gmail))

        dispatch(new_user(["email", gmail]))
        navigate("/creating-user/password")
    }

    return (
        <Box sx={{ textAlign: "center", marginTop: "60px" }}>
            <form onSubmit={(e) => handleSubmit(e)} id='sgmail'>
                <Typography sx={{ fontSize: { xs: "20px", sm: "30px", md: "35px" }, marginLeft: { xs: "50px", sm: "300px", md: "600px" } }}>Google</Typography>
                <Typography sx={{ fontSize: { xs: "10px", sm: "15px", md: "20px" }, marginLeft: { xs: "50px", sm: "300px", md: "600px" } }}>Create a Gmail Address</Typography>
                <Typography sx={{ fontSize: { xs: "10px", sm: "15px", md: "20px" }, marginLeft: { xs: "50px", sm: "300px", md: "600px" } }}>Enter your Gmail</Typography>

                <TextField sx={{ marginTop: "30px", marginLeft: { xs: "50px", sm: "300px", md: "600px" } }} label="Create a Gmail Address" name='gmail' id='gmail' />
                <br /><br />
                <Box sx={{ display: "flex", justifyContent: "space-between", gap: "5px", marginLeft: { xs: "50px", sm: "300px", md: "600px" } }}>
                    <Button sx={{ marginTop: "10px", marginBottom: "20px" }} onClick={() => navigate("/creating-user/dob")} variant="contained" type='submit'>Back</Button>
                    <Button sx={{ marginTop: "10px", marginBottom: "20px" }} variant="contained" type='submit' >Next</Button>
                </Box>
            </form>
        </Box>

    )
}

export default CreateAccountGmail
