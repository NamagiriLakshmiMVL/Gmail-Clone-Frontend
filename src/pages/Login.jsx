import { Box, Typography, Button, TextField, CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { API } from '../API'
import { toast } from 'react-toastify';

function Login() {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false)
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
        await setLoader(true)
        await axios.post(`${API}/creating-user/login`, result)
            .then((res) => {
                {
                    res.data === "Login Successfull" ? (toast.success("Login Successfull", {
                        position: "top-center",
                        autoClose: 1000,
                    }) && navigate("/gmail/display-msg")) : toast.error(res.data, {
                        position: "top-center",
                        autoClose: 1000,
                    })
                }
            })
            .catch((err) => alert(err))
        setLoader(false)

    }



    return (
        <div>

            {loader === true && <CircularProgress sx={{ marginLeft: "700px" }} />}
            <Box sx={{ textAlign: "center", marginTop: "60px" }}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <Typography sx={{ fontSize: { xs: "20px", sm: "30px", md: "35px" }, marginLeft: { xs: "50px", sm: "300px", md: "600px" } }}>Google</Typography>

                    <Typography sx={{ fontSize: { xs: "10px", sm: "15px", md: "20px" }, marginLeft: { xs: "50px", sm: "300px", md: "600px" } }}>Sign in to Google Account</Typography>


                    <TextField sx={{ marginTop: "20px", marginLeft: { xs: "50px", sm: "300px", md: "600px" } }} label="Email" name='email' id='loginemail' placeholder="john@gmail.com" />
                    <br /><br />
                    <TextField sx={{ marginTop: "20px", marginLeft: { xs: "50px", sm: "300px", md: "600px" } }} label="Password" variant="outlined" id='loginpass' name='password' placeholder="john@123" />
                    <br /><br />
                    <Box sx={{ display: "flex", justifyContent: "space-between", gap: "5px", marginLeft: { xs: "50px", sm: "300px", md: "600px" } }}>
                        <Button sx={{ marginTop: "10px", marginBottom: "20px" }} onClick={() => navigate("/")} variant="contained" >Back</Button>
                        <Button sx={{ marginTop: "10px", marginBottom: "20px" }} variant="contained" type='submit' >Next</Button>
                    </Box>
                </form>
            </Box>
        </div>
    )
}

export default Login
