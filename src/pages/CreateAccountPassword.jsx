import { Box, Typography, Button, TextField } from '@mui/material'
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
        <Box sx={{ textAlign: "center", marginTop: "80px" }}>
            <form id="password" onSubmit={(e) => handleSubmit(e)}>
                <Typography sx={{ fontSize: { xs: "20px", sm: "30px", md: "35px" }, marginLeft: { xs: "50px", sm: "300px", md: "600px" } }}>Google</Typography>
                <Typography sx={{ fontSize: { xs: "10px", sm: "15px", md: "20px" }, marginLeft: { xs: "50px", sm: "300px", md: "600px" } }}>Create a Gmail Password</Typography>
                <Typography sx={{ fontSize: { xs: "10px", sm: "15px", md: "20px" }, marginLeft: { xs: "50px", sm: "300px", md: "600px" } }}>Enter your Password</Typography>
                <TextField sx={{ marginTop: "30px", marginLeft: { xs: "50px", sm: "300px", md: "600px" } }} label="Create a Gmail Password" id="pass" name='password' onChange={(e) => setPassword(e.target.value)} />
                <br /><br />
                <Box sx={{ display: "flex",justifyContent:"space-between", gap: "5px", marginLeft: { xs: "50px", sm: "300px", md: "600px" } }}>
                    <Button sx={{ marginTop: "10px", marginBottom: "20px" }} onClick={() => navigate("/creating-user/gmail")} variant="contained" type='submit'>Back</Button>
                    <Button sx={{ marginTop: "10px", marginBottom: "20px" }} variant="contained" type='submit'  >Next</Button>
                </Box>
            </form>
            <br />
        </Box >
    )
}

export default CreateAccountGmail
